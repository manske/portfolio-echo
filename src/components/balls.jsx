import React, { Component } from 'react';
import * as THREE from 'three';
import Ammo from 'ammo.js'; 
//import createjs from 'tweenjs';
import './scripts/collabaloader.js';
//import './scripts/tweenjs.js';
let _scene = './public/models/site_echo-alt-alt.dae';


 

class ThreeScene extends Component{

  	componentDidMount(){

	      this.lightMaterial = new THREE.MeshPhongMaterial({
	            color: 0xFFFFFF,
	            emissive: 0x0,
	            specular: 0x0,
	            shininess: 0
          })

          this.lessLightMaterial = new THREE.MeshPhongMaterial({
            color: 0xefefef,
            emissive: 0x0,
            specular: 0x0,
            shininess: 0
      })
          
          //this.lightMaterial = new THREE.MeshNormalMaterial();

	      this.darkMaterial = new THREE.MeshPhongMaterial({
	      	color: 0x1dd1a1,
	            emissive: 0x0,
	            specular: 0x0,
                shininess: 0,
                opacity: 1

	      })


	        // Physics variables
	      this.gravityConstant = 7.8;
	      this.collisionConfiguration;
	         this.dispatcher;
	         this.broadphase;
	         this.solver;
	         this.physicsWorld;
	         this.margin = 0.05;

	         this.rigidBodies = [];
	         this.softBodies = [];

	         this.pos = new THREE.Vector3();
	         this.quat = new THREE.Quaternion();
	         this.transformAux1 = new Ammo.btTransform();
	         this.tempBtVec3_1 = new Ammo.btVector3( 0, 0, 0 );

	      this.particleCount = 30;
	      this.particles = [];

	      this.mouseCoords = new THREE.Vector2();
	      this.raycaster = new THREE.Raycaster();

	      this.clock = new THREE.Clock();
	      this.time = 0;

        	this.spheres = [];
            this.basin = [];
            this.propeller;
            this.hello;
            this.hello_geo;

        	this.cursorX = 0;
       	    this.cursorY = 0;

          
            this.kittyState1 = false;


		    const width = window.innerWidth
		    const height = window.innerHeight


		    var balls = this


		    document.onmousemove = function(e){
	            balls.cursorX = e.pageX;
	            balls.cursorY = e.pageY;
        	}

	    	//ADD SCENE
	    	balls.scene = new THREE.Scene()

		    //ADD CAMERA
            balls.camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 100);
            balls.camera.position.x = 0;

            if (window.innerWidth > 728) {
                balls.camera.position.y = 15;
            } else {
                balls.camera.position.y = 25;
            }
            balls.camera.position.z = 0;
            balls.camera.lookAt(0,0,0);
            balls.scene.add(balls.camera);

            //scootchZ(this.camera, 30, this.camera.position.z, 1000, 500);


            balls.light = new THREE.HemisphereLight( 0xffffff, 0x484848, 1 );
            balls.light.position.x = 0;
            balls.light.position.y = 2;
            balls.light.position.z = 0;
            balls.scene.add( balls.light );



	    	//ADD RENDERER
	    	balls.renderer = new THREE.WebGLRenderer({ antialias: true,  alpha: true })
	    	//this.renderer.setClearColor('#000000')
	    	balls.renderer.setSize(width, height)
	    	balls.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
	    	balls.mount.appendChild(balls.renderer.domElement)

	    	//balls.mount.addEventListener('click', balls.alterScene, false)


            window.addEventListener('resize', () => {
                var width = window.innerWidth,
                height = window.innerHeight;
                balls.renderer.setSize(width, height);
                balls.camera.aspect = width / height;
                balls.camera.updateProjectionMatrix();

                if (width > 728) {
                    balls.camera.position.y = 15;
                } else {
                    balls.camera.position.y = 25;
                }
            });



            balls.initPhysics();

		//ADD BALLS
		balls.loader = new THREE.ColladaLoader()
		balls.loader.load( _scene, function colladaReady( collada ) {

                
                var model = collada.scene;
                var model_geometry = collada.scene.children[ 0 ].geometry;
                var model_material = new THREE.PointsMaterial( { color: 0x888888 } );

                console.log(collada);

                for (var i = 0; i < model.children.length; i++) {
                    if (model.children[i].name.indexOf("deadbeef") != -1) {
                        balls.spheres.push(model.children[i]);
                    }

                    if (model.children[i].name.indexOf("foobert") != -1) {
                        balls.hello = model.children[i];
                    }

                    if (model.children[i].name.indexOf("foobert") != -1) {
                        let n = model.children[i];
                        balls.hello_geo = new THREE.Geometry().fromBufferGeometry( n.geometry);
                        balls.hello_geo.computeVertexNormals();
                    }


                }

                for (var i = 0; i < balls.spheres.length; i++) {
                }

                for (var i = 0; i < balls.spheres.length; i++) {
                    
                    balls.spheres[i].material = balls.lightMaterial;

                    var shape = new Ammo.btSphereShape(1);

                    balls.createRigidBody(balls.spheres[i], shape, 0);

                    //balls.bloop(balls.spheres[i], 0, balls.spheres[i].scale.y, 400, (0 * 200));
                }
                
                balls.hello.material = balls.darkMaterial;
                balls.createRigidBody(balls.hello, balls.createTriMeshShape(balls.hello_geo), 0)

            })

		this.start()


		this.initInput()
	    
  	}

	componentWillUnmount(){
	    this.stop()
	    this.mount.removeChild(this.renderer.domElement)
	 }


     createTriMeshShape(geometry) {
        let triangles = [],
        triangle_mesh = new Ammo.btTriangleMesh,
        face = [],
        vertices = geometry.vertices;;

        for (let i = 0; i < geometry.faces.length; i++ ) {
			face = geometry.faces[i];
			if ( face instanceof THREE.Face3) {

				triangles.push([
					{ x: vertices[face.a].x, y: vertices[face.a].y, z: vertices[face.a].z },
					{ x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
					{ x: vertices[face.c].x, y: vertices[face.c].y, z: vertices[face.c].z }
				]);

			} else if ( face instanceof THREE.Face4 ) {

				triangles.push([
					{ x: vertices[face.a].x, y: vertices[face.a].y, z: vertices[face.a].z },
					{ x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
					{ x: vertices[face.d].x, y: vertices[face.d].y, z: vertices[face.d].z }
				]);
				triangles.push([
					{ x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
					{ x: vertices[face.c].x, y: vertices[face.c].y, z: vertices[face.c].z },
					{ x: vertices[face.d].x, y: vertices[face.d].y, z: vertices[face.d].z }
				]);

			}
        }


        var triangle = new Ammo.btTriangleMesh;
        var btConvexHullShape = new Ammo.btConvexHullShape();
        var _vec3_1 = new Ammo.btVector3(0,0,0);
        var _vec3_2 = new Ammo.btVector3(0,0,0);
        var _vec3_3 = new Ammo.btVector3(0,0,0);
        for ( let i = 0; i < triangles.length; i++ ) {
            triangle = triangles[i];
            _vec3_1.setX(triangle[0].x);
            _vec3_1.setY(triangle[0].y);
            _vec3_1.setZ(triangle[0].z);
            btConvexHullShape.addPoint(_vec3_1,true);
            _vec3_2.setX(triangle[1].x);
            _vec3_2.setY(triangle[1].y);
            _vec3_2.setZ(triangle[1].z);
            btConvexHullShape.addPoint(_vec3_2,true);
            _vec3_3.setX(triangle[2].x);
            _vec3_3.setY(triangle[2].y);
            _vec3_3.setZ(triangle[2].z);
            btConvexHullShape.addPoint(_vec3_3,true);
            triangle_mesh.addTriangle(
                _vec3_1,
                _vec3_2,
                _vec3_3,
                true
            );
        }

        return btConvexHullShape;
     }

	createRigidBody( object, physicsShape, mass, pos, quat, vel, angVel ) {

            if ( pos ) {
                object.position.copy( pos );
            }
            else {
                pos = object.position;
                console.log(object, pos);
            }
            if ( quat ) {
                object.quaternion.copy( quat );
            }
            else {
                quat = object.quaternion;
            }

            var transform = new Ammo.btTransform();
            transform.setIdentity();
            transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
            transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
            var motionState = new Ammo.btDefaultMotionState( transform );

            var localInertia = new Ammo.btVector3( 0, 0, 0 );
            physicsShape.calculateLocalInertia( mass, localInertia );

            var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
            var rbody = new Ammo.btRigidBody( rbInfo );

            rbody.setFriction( 0.5 );

            var localInertia = new Ammo.btVector3( 0, 0, 0 );
            localInertia.threeObject = object;
            rbody.setUserPointer( localInertia );

            if ( vel ) {
                rbody.setLinearVelocity( new Ammo.btVector3( vel.x, vel.y, vel.z ) );
            }
            if ( angVel ) {
                rbody.setAngularVelocity( new Ammo.btVector3( angVel.x, angVel.y, angVel.z ) );
            }

            object.userData.physicsBody = rbody;
            object.userData.collided = false;

            this.scene.add( object );

            if ( mass > 0 ) {
                this.rigidBodies.push( object );

                // Disable deactivation
                rbody.setActivationState( 4 );
            }

            this.physicsWorld.addRigidBody( rbody );

            console.log(this.scene);
        
            return rbody;
      }


      initInput() {


      	this.mount.addEventListener( 'mousedown', throwBall, false );
            //document.querySelector(".hero__place").addEventListener( 'mousedown', throwBall, false );
            //document.querySelector(".navbar").addEventListener( 'mousedown', throwBall, false );

           	let _this = this;

            function throwBall( event ) {

                var material = _this.darkMaterial
                
                //new THREE.MeshPhongMaterial({
                //    color: 0x3c3c3c,
                //    emissive: _this.getRandomColor(),
                //    specular: 0x0,
                //    shininess: 0
                //});

                _this.mouseCoords.set(
                    ( event.clientX / window.innerWidth ) * 2 - 1,
                    - ( event.clientY / window.innerHeight ) * 2 + 1
                );

                _this.raycaster.setFromCamera( _this.mouseCoords, _this.camera );

                // Creates a ball and throws it
                var ballMass = 5;
                var ballRadius = 0.4;

                var ball = new THREE.Mesh( new THREE.SphereGeometry( ballRadius, 14, 10 ), material );
                //console.log(ball);
                ball.castShadow = false;
                ball.receiveShadow = false;
                ball.name = "ball";
                var ballShape = new Ammo.btSphereShape( ballRadius );
                
                ballShape.setMargin( _this.margin );
                _this.pos.copy( _this.raycaster.ray.direction );
                _this.pos.add( _this.raycaster.ray.origin );
                _this.quat.set( 0, 0, 0, 1 );
                var ballBody = _this.createRigidBody( ball, ballShape, ballMass, _this.pos, _this.quat );

                _this.pos.copy( _this.raycaster.ray.direction );
                _this.pos.multiplyScalar( 24 );
                ballBody.setLinearVelocity( new Ammo.btVector3( _this.pos.x, _this.pos.y, _this.pos.z ) );

            }

      }


      initPhysics() {

            // Physics configuration
            this.collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
            this.dispatcher = new Ammo.btCollisionDispatcher( this.collisionConfiguration );
            this.broadphase = new Ammo.btDbvtBroadphase();
            this.solver = new Ammo.btSequentialImpulseConstraintSolver();
            this.physicsWorld = new Ammo.btDiscreteDynamicsWorld( this.dispatcher, this.broadphase, this.solver, this.collisionConfiguration );
            this.physicsWorld.setGravity( new Ammo.btVector3( 0, - this.gravityConstant, 0 ) );

      }

      bloop(thingToAnimate, start, target, dura, delay) {

            thingToAnimate.scale.x = start;
            thingToAnimate.scale.y = start;
            thingToAnimate.scale.z = start;

            var delay = delay || 0;

            var tweenScale = new TWEEN.Tween({ 
                    scale: start 
                }).to ({ 
                    scale : target 
                }, dura).easing(TWEEN.Easing.Quadratic.Out).delay(delay).onUpdate(function () {
                        thingToAnimate.scale.x = this.scale;
                        thingToAnimate.scale.y = this.scale;
                        thingToAnimate.scale.z = this.scale;
                    }).onComplete(function () {
                        
                    });

               tweenScale.start();
            
                return tweenScale;
      }


      fillScene() {
            var ballMass = 35;
            var ballRadius = 0.4;
            var balls = [];
            var particleGeometry = new THREE.SphereGeometry(ballRadius, 14, 10 ); // size, number of polys to form this circle
            var particleMaterial = this.lightMaterial

            // create a random set of particles
            for (var i = 0; i < this.particleCount; i++) {

                balls[i] = new THREE.Mesh( particleGeometry, particleMaterial );

                //randomize positions
                balls[i].position.x = THREE.Math.randFloatSpread( 10 );
                balls[i].position.y = 15;
                balls[i].position.z = THREE.Math.randFloatSpread( 2 );

                balls[i].castShadow = false;
              balls[i].receiveShadow = false;
              var ballShape = new Ammo.btSphereShape( ballRadius );
              
              ballShape.setMargin( this.margin );
              this.pos.set(THREE.Math.randFloatSpread( 10 ), 10, THREE.Math.randFloatSpread( 2 ));
              //quat.set( 0, 0, 0, 1 );

              
              var ballBody = this.createRigidBody( balls[i], ballShape, ballMass, this.pos, this.quat );

              //ballBody.setDamping(1);

                
                /*balls[i].direction = {
                    x: Math.random(),
                    y: Math.random() * -0.1
                }*/
                
                 
                

            }
        }


      updatePhysics( deltaTime ) {

            // Step world
            this.physicsWorld.stepSimulation( deltaTime, 10 );

            // Update rigid bodies
            for ( var i = 0, il = this.rigidBodies.length; i < il; i++ ) {
                var objThree = this.rigidBodies[ i ];
                var objPhys = objThree.userData.physicsBody;
                var ms = objPhys.getMotionState();
                if ( ms ) {

                    ms.getWorldTransform( this.transformAux1 );
                    var p = this.transformAux1.getOrigin();
                    var q = this.transformAux1.getRotation();
                    objThree.position.set( p.x(), p.y(), p.z() );
                    objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );

                    objThree.userData.collided = false;

                }
            }

      }


      getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }


	start = () => {
	    if (!this.frameId) {
	      this.frameId = requestAnimationFrame(this.animate)
	    }
	}

	stop = () => {
	    cancelAnimationFrame(this.frameId)
	}

	animate = () => {

	   TWEEN.update()

	   this.renderScene()
	   this.frameId = window.requestAnimationFrame(this.animate)

	}

	renderScene = () => { 

        function ballError(hit, _material, old_material) {
            hit.material = _material;
            setTimeout(() => {
                hit.material = old_material;
                console.log("material returned");
            }, 100);
        }

		var deltaTime = this.clock.getDelta();

            this.updatePhysics( deltaTime );

            var dp = this.dispatcher,
                num = dp.getNumManifolds(),
                manifold, num_contacts, j, pt;

            for ( var i = 0, il = this.dispatcher.getNumManifolds(); i < il; i ++ ) { 

                    manifold = this.dispatcher.getManifoldByIndexInternal(i);

                    var rb0 = manifold.getBody0();
                    var rb1 = manifold.getBody1();

                    var threeObject0 = Ammo.castObject( rb0.getUserPointer(), Ammo.btVector3 ).threeObject;
                    var threeObject1 = Ammo.castObject( rb1.getUserPointer(), Ammo.btVector3 ).threeObject;

                    if ( ! threeObject0 && ! threeObject1 ) {
                        //console.log('before');
                        continue;
                    }

                    num_contacts = manifold.getNumContacts();
                    if (num_contacts === 0) {
                        continue;
                    }

                    console.log("1", threeObject1.name);
                    console.log("0", threeObject0.name);

                    if ( threeObject0.name.indexOf("kittygirl") != -1) {
                        if ( threeObject0.name == "ball" ||  threeObject1.name == "ball" ) {
                            //effectBottle();
                            //if (this.kittyState1 == false ) {
                                threeObject0.material = this.darkMaterial;
                                this.kittyState1 = true;
                                
                            //}
                            console.log( this.kittyState1); 
                           
                            console.log("drop");
                        }
                    } else if ( threeObject0.name.indexOf("deadbeef") != -1 && threeObject0.name.indexOf("kittygirl") === -1) {
                        if ( threeObject0.name == "ball" ||  threeObject1.name == "ball" ) {
                            //if (!document.querySelector("body").classList.contains('darkmode')) darkMode();
                            //if (document.querySelector("body").classList.contains('darkmode')) darkMode();
                            ballError(threeObject0, this.lessLightMaterial, this.lightMaterial); 
                        }
                    } 

                    

                    for (j = 0; j < num_contacts; j++) {
                        pt = manifold.getContactPoint(j);
                        console.log('COLLISION DETECTED!');
                    }
            }

            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].position.y < -100) {
                    this.scene.remove(this.scene.children[i]);
                }   
            }

            var centerX = document.documentElement.clientWidth / 2,
            centerY = document.documentElement.clientHeight / 2;

            var xRelPos = -this.cursorX + centerX,
            yRelPos = this.cursorY - centerY;

            var xRatio = xRelPos / centerX,
            yRatio = yRelPos / centerY;


            this.camera.position.x = xRatio * .1;
            this.camera.position.z = yRatio * -.1;

		this.renderer.render(this.scene, this.camera)

	  	this.time += deltaTime
	}

	render(){
	    return(
	      <div
	        ref={(mount) => { this.mount = mount }}
	      />
	    )
	 }
}

export default ThreeScene