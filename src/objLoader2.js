

import * as trackballControls from 'three/examples/js/controls/TrackballControls';
import * as loaderSupport from 'three/examples/js/loaders/LoaderSupport';
import * as OBJLoader2 from 'three/examples/js/loaders/OBJLoader2';
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


///OBJLoader2///

// instantiate the loader
var loader = new THREE.OBJLoader2();

// function called on successful load
var callbackOnLoad = function ( event ) {
	scene.add( event.detail.loaderRootNode );
};

// load a resource from provided URL synchronously
loader.load( fileURL, callbackOnLoad, null, null, null, false );

///OBJLoader2///

camera.position.z = 4000;

var render = function () {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

render();
