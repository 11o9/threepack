const THREE = require('three');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(20,20,20);
var material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 50;

var render = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

render();
