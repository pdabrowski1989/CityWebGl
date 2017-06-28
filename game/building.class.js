import globals from './globals';

class building {
    constructor(count) {
        this.count = count;
    }

    createCube() {
        let cube = new THREE.CubeGeometry(1, 1, 1);
        let material = new THREE.MeshDepthMaterial({overdraw: true});

        cube.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));

        return new THREE.Mesh(cube.clone(), material.clone())
    }

    loopCity() {
        for(let i = 0; i < this.count; i++) {
            let building = this.createCube();

            building.position.x = Math.floor(Math.random() * 200 - 100) * 4;
            building.position.z = Math.floor(Math.random() * 200 - 100) * 4;
            building.scale.x = Math.random() * 50 + 10;
            building.scale.y = Math.random() * building.scale.x * 8 + 8;
            building.scale.z = building.scale.x;
            globals.scene.add(building);
        }
    }
}

export default building;