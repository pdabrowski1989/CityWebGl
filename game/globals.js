let globals = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000),
  renderer: new THREE.WebGLRenderer()
};

export default globals;