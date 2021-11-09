import * as THREE from "/samples/threejs/story/build/three.module.js";
import { OrbitControls } from "/samples/threejs/story/examples/OrbitControls.js";
import { FontLoader } from "/samples/threejs/story/examples/FontLoader.js";
import { TextGeometry } from "/samples/threejs/story/examples/TextGeometry.js";
import { GLTFLoader } from "/samples/threejs/story/examples/GLTFLoader.js";
import { FBXLoader } from "/samples/threejs/story/examples/FBXLoader.js";

class App {
  constructor() {
    const divContainer = document.querySelector("#webgl-container");
    this._divContainer = divContainer;

    const gltfLoader = new GLTFLoader();
    const renderer = new THREE.WebGLRenderer({
      divContainer,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);

    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupTitle();
    this._setupRabbit();
    this._setupTurtle();
    this._setupFloor();
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupControls() {
    this._controls = new OrbitControls(this._camera, this._divContainer);
  }

  _setupCamera() {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 3;
    // camera.position.set(3000, 1000, 30000);
    // camera.lookAt(0,0,0);
    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff;
    const light = new THREE.AmbientLight(color);
    this._scene.add(light);
  }

  _zoomFit(object3D, camera, viewMode, bFront) {
    const box = new THREE.Box3().setFromObject(object3D);
    const sizeBox = box.getSize(new THREE.Vector3()).length();
    const centerBox = box.getCenter(new THREE.Vector3());

    let offsetX = 0,
      offsetY = 0,
      offsetZ = 0;
    viewMode === "X"
      ? (offsetX = 1)
      : viewMode === "Y"
      ? (offsetY = 1)
      : (offsetZ = 1);

    if (!bFront) {
      offsetX *= -1;
      offsetY *= -1;
      offsetZ *= -1;
    }
    camera.position.set(
      centerBox.x + offsetX,
      centerBox.y + offsetY,
      centerBox.z + offsetZ
    );

    const halfSizeModel = sizeBox * 0.5;
    const halfFov = THREE.Math.degToRad(camera.fov * 0.5);
    const distance = halfSizeModel / Math.tan(halfFov);
    const direction = new THREE.Vector3()
      .subVectors(camera.position, centerBox)
      .normalize();
    const position = direction.multiplyScalar(distance).add(centerBox);

    camera.position.copy(position);
    camera.near = sizeBox / 100;
    camera.far = sizeBox * 100;

    camera.updateProjectionMatrix();

    camera.lookAt(centerBox.x, centerBox.y, centerBox.z);
    this._controls.target.set(centerBox.x, centerBox.y, centerBox.z);
  }

  _setupTitle() {
    const loader = new FontLoader();
    loader.load("/samples/threejs/story/data/Do_Regular.json", (font) => {
      const geometry = new TextGeometry(
        "토끼와_거북이\n#1",

        {
          font: font,
          size: 1500,
          height: 100,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelOffset: 0.005,
          bevelSegments: 24,
        }
      );

      // geometry.center();

      const material = new THREE.MeshStandardMaterial({
        color: "blue",
        roughness: 0.3,
        metalness: 0.7,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(-5000, 3000, -5000);
      this._scene.add(mesh);
    });
  }

  _setupFloor() {
    const ground_geometry = new THREE.BoxBufferGeometry(8000, 100, 10000);
    const loader = new THREE.TextureLoader();
    const ground_meterial = new THREE.MeshBasicMaterial({
      map: loader.load("/samples/threejs/story/images/grass1.jpg"),
    });
    const ground = new THREE.Mesh(ground_geometry, ground_meterial);

    this._scene.add(ground);
  }

  _setupRabbit() {
    this._clock = new THREE.Clock();

    const loader = new FBXLoader();
    loader.load("/samples/threejs/story/data/Jumping.fbx", (rabbit) => {
      this._mixer = new THREE.AnimationMixer(rabbit);
      const action = this._mixer.clipAction(rabbit.animations[0]);
      action.play();

      rabbit.position.set(1000, 100, -3000);
      this._scene.add(rabbit);
      this._zoomFit(rabbit, this._camera, "Z", true);
    });
  }

  _setupTurtle() {
    this._clock = new THREE.Clock();

    const loader = new FBXLoader();
    loader.load("/samples/threejs/story/data/Walking.fbx", (turtle) => {
      this._mixer2 = new THREE.AnimationMixer(turtle);
      const action = this._mixer2.clipAction(turtle.animations[0]);

      turtle.position.set(-1500, 100, -3000);
      turtle.scale.set(10, 10, 10);
      this._scene.add(turtle);
      // this._zoomFit(rabbit, this._camera, "Z", true);
    });
  }
  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    this._renderer.render(this._scene, this._camera);
    this.update(time);

    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.001; // second unit

    const delta = this._clock.getDelta();
    if (this._mixer) this._mixer.update(delta);
  }
}

window.onload = function () {
  new App();
};
