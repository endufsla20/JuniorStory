import * as THREE from "../../build/three.module.js";
import { OrbitControls } from "../../examples/OrbitControls.js";
import { FontLoader } from "../../examples/FontLoader.js";
import { TextGeometry } from "../../examples/TextGeometry.js";
import { GLTFLoader } from "../../examples/GLTFLoader.js";
import { FBXLoader } from "../../examples/FBXLoader.js";

class App {
  constructor() {
    const divContainer = document.querySelector("#webgl-container");
    this._divContainer = divContainer;

    const listner = new THREE.AudioListener();
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
    const scene2 = new THREE.Scene();
    this._scene = scene;
    this._scene2 = scene2;

    this.page = 1;
    this.isPlay = true;

    this._setupCamera();
    // this._setupAudio();
    this._setupLight();
    this._setupTitle();
    this._setupRabbit();
    this._setupTree();
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
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    camera.position.z = 3;
    camera.position.set(-9000, 4000, 0);
    this._camera = camera;
  }

  // _setupAudio() {
  //   const listener = new THREE.AudioListener();
  //   this._camera.add( listener );

  //   const sound = new THREE.Audio( listener );

  //   const audioLoader = new THREE.AudioLoader();
  //   audioLoader.load('./data/title.ogg', function( buffer ) {
  //     sound.setBuffer( buffer );
  //     sound.setLoop( false );
  //     sound.setVolume( 1 );
  //     sound.play();
  //   });
  // }

  _setupLight() {
    const color = 0xffffff;
    const light = new THREE.AmbientLight(color);
    const light2 = new THREE.AmbientLight(color);
    this._scene.add(light);
    this._scene2.add(light2);
  }

  _setupTitle() {
    const loader = new FontLoader();
    loader.load("samples/threejs/story/data/Do_Regular.json", (font) => {
      const geometry = new TextGeometry(
        "토끼와_거북이",

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

      mesh.position.set(5000, 1000, -8500);
      mesh.rotation.y = Math.PI / -2;
      this._scene2.add(mesh);
    });
  }

  _setupFloor() {
    const ground_geometry = new THREE.BoxBufferGeometry(10000, 500, 20000);
    const loader = new THREE.TextureLoader();
    const ground_meterial = new THREE.MeshBasicMaterial({
      map: loader.load("samples/threejs/story/images/grass1.jpg"),
    });
    const ground = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground2 = new THREE.Mesh(ground_geometry, ground_meterial);

    this._scene.add(ground);
    this._scene2.add(ground2);
  }

  _setupRabbit() {
    this._clock = new THREE.Clock();
    let pos = { x: 1500, y: 300, z: -8000 };
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (rabbit) => {
      rabbit.position.set(pos.x, pos.y, pos.z);
      this._scene.add(rabbit);
      this._mixer = new THREE.AnimationMixer(rabbit);
      const action = this._mixer.clipAction(rabbit.animations[0]);
      action.play();
    });

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down) => {
        rb_lay_down.position.set(1500, 300, 380000);
        rb_lay_down.rotation.y = Math.PI / -2;
        this._scene.add(rb_lay_down);
        this._mixer3 = new THREE.AnimationMixer(rb_lay_down);
        const rb_lay_action = this._mixer3.clipAction(
          rb_lay_down.animations[0]
        );
        rb_lay_action.setLoop(THREE.LoopOnce);
        rb_lay_action.clampWhenFinished = true;
        rb_lay_action.enable = true;
        rb_lay_action.play();
      }
    );

    loader.load("samples/threejs/story/data/rabbit/Walk.fbx", (rb_victory) => {
      rb_victory.position.set(1500, 300, 3800);
      rb_victory.rotation.y = Math.PI / -2;
      this._scene2.add(rb_victory);
      this._mixer5 = new THREE.AnimationMixer(rb_victory);
      const rb_victory_action = this._mixer5.clipAction(
        rb_victory.animations[0]
      );
      rb_victory_action.play();
    });
  }

  _setupTurtle() {
    // this._clock = new THREE.Clock();
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/turtle/Crawling.fbx", (turtle) => {
      turtle.position.set(-1500, 650, -8000);
      turtle.scale.set(5, 5, 5);
      this._scene.add(turtle);
      this._mixer2 = new THREE.AnimationMixer(turtle);
      const rb_action = this._mixer2.clipAction(turtle.animations[0]);
      rb_action.play();
    });

    loader.load(
      "samples/threejs/story/data/turtle/Breakdance.fbx",
      (tt_victory) => {
        tt_victory.position.set(-1500, 650, 380000);
        tt_victory.scale.set(5, 5, 5);
        this._scene.add(tt_victory);
        this._mixer4 = new THREE.AnimationMixer(tt_victory);
        const tt_victory_action = this._mixer4.clipAction(
          tt_victory.animations[0]
        );
        tt_victory_action.play();
      }
    );
  }

  _setupTree() {
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/Tree1.fbx", (tree) => {
      tree.position.set(3000, 100, 4000);
      tree.scale.set(5, 5, 5);
      this._scene.add(tree);
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
    switch (this.page) {
      case 1:
        this.scene1(this.delta);
        this._renderer.render(this._scene, this._camera);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;
      case 2:
        this.scene2(this.delta);
        this._renderer.render(this._scene2, this._camera);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;
    }
  }

  update(time) {
    time *= 0.001; // second unit

    this.delta = this._clock.getDelta();
  }

  scene1(delta) {
    if (this._mixer) {
      this._mixer.update(delta);
      this._mixer._root.position.z += 150;
      if (this._mixer._root.position.z >= 3800) {
        this._mixer._root.position.z = 380000;
        this._mixer3._root.position.z = 3800;
        this._mixer3.update(delta);
      }
    }
    if (this._mixer2) {
      this._mixer2.update(delta);
      this._mixer2._root.position.z += 150;
      if (this._mixer2._root.position.z >= 8500) {
        this._mixer2._root.position.z = 380000;
        this._mixer4._root.position.z = 380000;
        this._mixer4._root.position.y = 350;
        this._mixer4._root.rotation.y = Math.PI;
        this._mixer4.update(delta);
        this.page = 2;
        // this.isPlay = false;
      }
    }
  }
  scene2(delta) {
    if (this._mixer5) {
      this._mixer5.update(delta);
    }
  }
}

window.onload = function () {
  new App();
};
