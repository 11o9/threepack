import * as OBJLoader from 'three/examples/js/loaders/OBJLoader';
import * as MTLLoader from 'three/examples/js/loaders/MTLLoader';


import fileURL from 'file-loader!./../public/model/A59B3E_0001_U_150.obj';

var scene = new THREE.Scene(); // Create a Three.js scene object.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000); // Define the perspective camera's attributes.

var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(); // Fallback to canvas renderer, if necessary.
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the WebGL viewport.
document.body.appendChild(renderer.domElement); // Append the WebGL viewport to the DOM.

// Be aware that a light source is required for MeshPhongMaterial to work:
var pointLight = new THREE.PointLight(0xFFFFFF); // Set the color of the light source (white).
pointLight.position.set(100, 100, 250); // Position the light source at (x, y, z).
scene.add(pointLight); // Add the light source to the scene.

///OBJLoader///

var loader = new THREE.OBJLoader();
loader.load(
	// resource URL
	fileURL,
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

///OBJLoader///

camera.position.z = 4000;

var render = function () {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

render();
