const THREE = require('three');

let camera;
let scene;
let renderer;
let geometry;
let material;
let mesh;
var raycaster;
let mouse = new THREE.Vector2(), INTERSECTED;
var radius = 2;

init();
animate();


function init() {
  //scene
  scene = new THREE.Scene();

  //camera
  //PerspectiveCamera( fov, aspect, near, far )
  //fov — Camera frustum vertical field of view.
  //aspect — Camera frustum aspect ratio.
  //near — Camera frustum near plane.
  //far — Camera frustum far plane.
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 50;
  scene.add(camera);

  //geometry
  geometry = new THREE.CubeGeometry(1, 1, 1);

  //material
  material = new THREE.MeshNormalMaterial();

  //mesh
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x * 2 - 100, y * 2 - 100, 0);
      // traverse 에서 isMesh undefined 나와서 억지로 넣어줌
      mesh.isMesh = true;
      scene.add(mesh);
    }
  }

  //raycaster
  raycaster = new THREE.Raycaster();

	console.log(raycaster);
  //renderer
  renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(); // Fallback to canvas renderer, if necessary.

  renderer.setSize(window.innerWidth, window.innerHeight);

  //add canvas to document
  document.body.appendChild(renderer.domElement);
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}
//rotate to check 3d
//mesh.rotation.x = 2;
//mesh.rotation.z = 1;
//renderer.render(scene, camera);

//check mouse move
function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}


//animate
function animate() {

  //next frame
  requestAnimationFrame(animate);
  
  //change mesh data
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects( scene.children );
  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) {
        //INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
        INTERSECTED.rotation.x = 0; INTERSECTED.rotation.y = 0;
      }
        INTERSECTED = intersects[ 0 ].object;
        INTERSECTED.rotation.x += 1;
        INTERSECTED.rotation.y += 1;


        if(INTERSECTED.scale.x == 2) {
            INTERSECTED.scale.x = 1;
            INTERSECTED.scale.y = 1;
            INTERSECTED.scale.z = 1;
        }
        else{
            INTERSECTED.scale.x = 2;
            INTERSECTED.scale.y = 2;
            INTERSECTED.scale.z = 2;
        }
       

      //INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      //INTERSECTED.material.color.setHex( 0xff0000 );
     
    }
  } else {
    if ( INTERSECTED ) {INTERSECTED.rotation.x = 0; INTERSECTED.rotation.y = 0;} //INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }




  //re - render
  renderer.render(scene, camera);

}
