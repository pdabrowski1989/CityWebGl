import buildingClass from './building.class';
import globals from './globals';

let a = new buildingClass(300);

a.loopCity();

globals.camera.position.y = 400;
globals.camera.position.z = 400;
globals.camera.rotation.x = -45 * Math.PI / 180;
globals.renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(globals.renderer.domElement);

let run = () => {
    globals.renderer.render(globals.scene, globals.camera);
    requestAnimationFrame(run);
};

run();