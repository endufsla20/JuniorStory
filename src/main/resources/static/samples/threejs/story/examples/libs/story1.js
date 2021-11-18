import * as THREE from "../../build/three.module.js";
import { OrbitControls } from "../../examples/OrbitControls.js";
import { FontLoader } from "../../examples/FontLoader.js";
import { TextGeometry } from "../../examples/TextGeometry.js";
import { FBXLoader } from "../../examples/FBXLoader.js";
import { STT } from "../libs/stt.js";

class App {
  constructor() {
    const divContainer = document.querySelector("#webgl-container");
    this._divContainer = divContainer;

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
    const scene3 = new THREE.Scene();
    const scene4 = new THREE.Scene();
    const scene5 = new THREE.Scene();
    const scene6 = new THREE.Scene();
    const scene7 = new THREE.Scene();
    const scene8 = new THREE.Scene();
    const scene9 = new THREE.Scene();
    const scene10 = new THREE.Scene();
    const scene11 = new THREE.Scene();
    const scene12 = new THREE.Scene();
    const scene12_5 = new THREE.Scene();
    const scene13 = new THREE.Scene();
    const scene14 = new THREE.Scene();
    const scene15 = new THREE.Scene();
    const scene16 = new THREE.Scene();
    const scene17 = new THREE.Scene();

    this._scene = scene;
    this._scene2 = scene2;
    this._scene3 = scene3;
    this._scene4 = scene4;
    this._scene5 = scene5;
    this._scene6 = scene6;
    this._scene7 = scene7;
    this._scene8 = scene8;
    this._scene9 = scene9;
    this._scene10 = scene10;
    this._scene11 = scene11;
    this._scene12 = scene12;
    this._scene12_5 = scene12_5;
    this._scene13 = scene13;
    this._scene14 = scene14;
    this._scene15 = scene15;
    this._scene16 = scene16;
    this._scene17 = scene17;

    this.page = 12.5;
    this.playing = true;
    this.finish = false;
    this.finish5 = false;
    this.finish6 = false;
    this.finish7 = false;
    this.finish8 = false;
    this.finish9 = false;
    this.finish10 = false;
    this.finish11 = false;
    this.finish12 = false;
    this.finish13 = false;
    this.finish14 = false;
    this.finish15 = false;
    this.finish16 = false;
    this.finish17 = false;
    this.stt = true;

    this.call = function (msg) {};

    this._setupCamera();
    this._setupLight();
    this._setupTitle();
    this._setupText();
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
    this._controls.update();
  }

  _setupCamera() {
    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    camera.position.set(-9000, 4000, 3);
    this._camera = camera;

    const camera4 = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    const camera5 = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    const camera6 = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    const camera7 = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    const camera12_5 = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    const camera16 = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );

    camera4.position.set(1800, 1300, -4500);
    camera5.position.set(700, 2200, 5500);
    camera6.position.set(-1000, 1300, -3000);
    camera7.position.set(1800, 1300, -3000);
    camera12_5.position.set(-2000, 1850, 4500);
    camera12_5.rotation.set(0, Math.PI / -2, 0);
    camera16.position.set(-2000, 1850, 4500);
    camera16.rotation.set(0, Math.PI / -2, 0);

    this._camera4 = camera4;
    this._camera5 = camera5;
    this._camera6 = camera6;
    this._camera7 = camera7;
    this._camera12_5 = camera12_5;
    this._camera16 = camera16;
  }

  _setupLight() {
    const color = 0xffffff;
    const light = new THREE.AmbientLight(color);
    const light2 = new THREE.AmbientLight(color);
    const light3 = new THREE.AmbientLight(color);
    const light4 = new THREE.AmbientLight(color);
    const light5 = new THREE.AmbientLight(color);
    const light6 = new THREE.AmbientLight(color);
    const light7 = new THREE.AmbientLight(color);
    const light8 = new THREE.AmbientLight(color);
    const light9 = new THREE.AmbientLight(color);
    const light10 = new THREE.AmbientLight(color);
    const light11 = new THREE.AmbientLight(color);
    const light12 = new THREE.AmbientLight(color);
    const light12_5 = new THREE.AmbientLight(color);
    const light13 = new THREE.AmbientLight(color);
    const light14 = new THREE.AmbientLight(color);
    const light15 = new THREE.AmbientLight(color);
    const light16 = new THREE.AmbientLight(color);
    const light17 = new THREE.AmbientLight(color);

    this._scene.add(light);
    this._scene2.add(light2);
    this._scene3.add(light3);
    this._scene4.add(light4);
    this._scene5.add(light5);
    this._scene6.add(light6);
    this._scene7.add(light7);
    this._scene8.add(light8);
    this._scene9.add(light9);
    this._scene10.add(light10);
    this._scene11.add(light11);
    this._scene12.add(light12);
    this._scene12_5.add(light12_5);
    this._scene13.add(light13);
    this._scene14.add(light14);
    this._scene15.add(light15);
    this._scene16.add(light16);
    this._scene17.add(light17);
  }

  _s1_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s1_sound = new THREE.Audio(listener);
    const s1_audioLoader = new THREE.AudioLoader();

    s1_audioLoader.load(
      "samples/threejs/story/data/tts/title.ogg",
      function (buffer) {
        s1_sound.setBuffer(buffer);
        s1_sound.setLoop(false);
        s1_sound.setVolume(1);
        s1_sound.play();
      }
    );
  }

  _s2_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s2_sound = new THREE.Audio(listener);
    const s2_audioLoader = new THREE.AudioLoader();

    s2_audioLoader.load(
      "samples/threejs/story/data/tts/2.ogg",
      function (buffer) {
        s2_sound.setBuffer(buffer);
        s2_sound.setLoop(false);
        s2_sound.setVolume(1);
        s2_sound.play();
      }
    );
  }

  _s3_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s3_sound = new THREE.Audio(listener);
    const s3_audioLoader = new THREE.AudioLoader();

    s3_audioLoader.load(
      "samples/threejs/story/data/tts/3.ogg",
      function (buffer) {
        s3_sound.setBuffer(buffer);
        s3_sound.setLoop(false);
        s3_sound.setVolume(1);
        s3_sound.play();
      }
    );
  }

  _s4_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s4_sound = new THREE.Audio(listener);
    const s4_audioLoader = new THREE.AudioLoader();

    s4_audioLoader.load(
      "samples/threejs/story/data/tts/4.ogg",
      function (buffer) {
        s4_sound.setBuffer(buffer);
        s4_sound.setLoop(false);
        s4_sound.setVolume(1);
        s4_sound.play();
      }
    );
  }

  _s5_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s5_sound = new THREE.Audio(listener);
    const s5_audioLoader = new THREE.AudioLoader();

    s5_audioLoader.load(
      "samples/threejs/story/data/tts/5.ogg",
      function (buffer) {
        s5_sound.setBuffer(buffer);
        s5_sound.setLoop(false);
        s5_sound.setVolume(1);
        s5_sound.play();
      }
    );
  }

  _s6_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s6_sound = new THREE.Audio(listener);
    const s6_audioLoader = new THREE.AudioLoader();

    s6_audioLoader.load(
      "samples/threejs/story/data/tts/6.ogg",
      function (buffer) {
        s6_sound.setBuffer(buffer);
        s6_sound.setLoop(false);
        s6_sound.setVolume(1);
        s6_sound.play();
      }
    );
  }

  _s7_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s7_sound = new THREE.Audio(listener);
    const s7_audioLoader = new THREE.AudioLoader();

    s7_audioLoader.load(
      "samples/threejs/story/data/tts/7.ogg",
      function (buffer) {
        s7_sound.setBuffer(buffer);
        s7_sound.setLoop(false);
        s7_sound.setVolume(1);
        s7_sound.play();
      }
    );
  }

  _s8_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s8_sound = new THREE.Audio(listener);
    const s8_audioLoader = new THREE.AudioLoader();

    s8_audioLoader.load(
      "samples/threejs/story/data/tts/8.ogg",
      function (buffer) {
        s8_sound.setBuffer(buffer);
        s8_sound.setLoop(false);
        s8_sound.setVolume(1);
        s8_sound.play();
      }
    );
  }

  _s9_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s9_sound = new THREE.Audio(listener);
    const s9_audioLoader = new THREE.AudioLoader();

    s9_audioLoader.load(
      "samples/threejs/story/data/tts/9.ogg",
      function (buffer) {
        s9_sound.setBuffer(buffer);
        s9_sound.setLoop(false);
        s9_sound.setVolume(1);
        s9_sound.play();
      }
    );
  }

  _s10_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s10_sound = new THREE.Audio(listener);
    const s10_audioLoader = new THREE.AudioLoader();

    s10_audioLoader.load(
      "samples/threejs/story/data/tts/10.ogg",
      function (buffer) {
        s10_sound.setBuffer(buffer);
        s10_sound.setLoop(false);
        s10_sound.setVolume(1);
        s10_sound.play();
      }
    );
  }

  _s11_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s11_sound = new THREE.Audio(listener);
    const s11_audioLoader = new THREE.AudioLoader();

    s11_audioLoader.load(
      "samples/threejs/story/data/tts/11.ogg",
      function (buffer) {
        s11_sound.setBuffer(buffer);
        s11_sound.setLoop(false);
        s11_sound.setVolume(1);
        s11_sound.play();
      }
    );
  }

  _s12_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s12_sound = new THREE.Audio(listener);
    const s12_audioLoader = new THREE.AudioLoader();

    s12_audioLoader.load(
      "samples/threejs/story/data/tts/12.ogg",
      function (buffer) {
        s12_sound.setBuffer(buffer);
        s12_sound.setLoop(false);
        s12_sound.setVolume(1);
        s12_sound.play();
      }
    );
  }

  _s13_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s13_sound = new THREE.Audio(listener);
    const s13_audioLoader = new THREE.AudioLoader();

    s13_audioLoader.load(
      "samples/threejs/story/data/tts/13.ogg",
      function (buffer) {
        s13_sound.setBuffer(buffer);
        s13_sound.setLoop(false);
        s13_sound.setVolume(1);
        s13_sound.play();
      }
    );
  }

  _s14_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s14_sound = new THREE.Audio(listener);
    const s14_audioLoader = new THREE.AudioLoader();

    s14_audioLoader.load(
      "samples/threejs/story/data/tts/14.ogg",
      function (buffer) {
        s14_sound.setBuffer(buffer);
        s14_sound.setLoop(false);
        s14_sound.setVolume(1);
        s14_sound.play();
      }
    );
  }

  _s15_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s15_sound = new THREE.Audio(listener);
    const s15_audioLoader = new THREE.AudioLoader();

    s15_audioLoader.load(
      "samples/threejs/story/data/tts/15.ogg",
      function (buffer) {
        s15_sound.setBuffer(buffer);
        s15_sound.setLoop(false);
        s15_sound.setVolume(1);
        s15_sound.play();
      }
    );
  }

  _s16_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s16_sound = new THREE.Audio(listener);
    const s16_audioLoader = new THREE.AudioLoader();

    s16_audioLoader.load(
      "samples/threejs/story/data/tts/16.ogg",
      function (buffer) {
        s16_sound.setBuffer(buffer);
        s16_sound.setLoop(false);
        s16_sound.setVolume(1);
        s16_sound.play();
      }
    );
  }

  _s17_Audio() {
    const listener = new THREE.AudioListener();
    this._camera.add(listener);
    const s17_sound = new THREE.Audio(listener);
    const s17_audioLoader = new THREE.AudioLoader();

    s17_audioLoader.load(
      "samples/threejs/story/data/tts/17.ogg",
      function (buffer) {
        s17_sound.setBuffer(buffer);
        s17_sound.setLoop(false);
        s17_sound.setVolume(1);
        s17_sound.play();
      }
    );
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

      mesh.position.set(-8000, 2500, -5500);
      mesh.rotation.y = Math.PI / -2;
      this._scene.add(mesh);
    });
  }
  _setupText() {
    const loader = new FontLoader();
    loader.load("samples/threejs/story/data/Do_Regular.json", (font) => {
      const geometry = new TextGeometry(
        "깨운다",

        {
          font: font,
          size: 1000,
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
        color: "#FF00CC",
        roughness: 0.3,
        metalness: 0.7,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(2000, 1850, -1500);
      mesh.rotation.y = Math.PI / -2;

      this._scene12_5.add(mesh);
    });

    loader.load("samples/threejs/story/data/Do_Regular.json", (font) => {
      const geometry = new TextGeometry(
        "무시한다",

        {
          font: font,
          size: 1000,
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
        color: "#FF00CC",
        roughness: 0.3,
        metalness: 0.7,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(2000, 1850, 5500);
      mesh.rotation.y = Math.PI / -2;

      this._scene12_5.add(mesh);
    });
  }

  _setupFloor() {
    const ground_geometry = new THREE.BoxBufferGeometry(10000, 500, 20000);
    const loader = new THREE.TextureLoader();
    const ground_meterial = new THREE.MeshBasicMaterial({
      map: loader.load("samples/threejs/story/images/grass1.jpg"),
    });
    const ground2 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground3 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground4 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground5 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground6 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground7 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground8 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground9 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground10 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground11 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground12 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground12_5 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground13 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground14 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground15 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground16 = new THREE.Mesh(ground_geometry, ground_meterial);
    const ground17 = new THREE.Mesh(ground_geometry, ground_meterial);

    this._scene2.add(ground2);
    this._scene3.add(ground3);
    this._scene4.add(ground4);
    this._scene5.add(ground5);
    this._scene6.add(ground6);
    this._scene7.add(ground7);
    this._scene8.add(ground8);
    this._scene9.add(ground9);
    this._scene10.add(ground10);
    this._scene11.add(ground11);
    this._scene12.add(ground12);
    this._scene12_5.add(ground12_5);
    this._scene13.add(ground13);
    this._scene14.add(ground14);
    this._scene15.add(ground15);
    this._scene16.add(ground16);
    this._scene17.add(ground17);
  }

  _setupRabbit() {
    this._clock = new THREE.Clock();
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (jump) => {
      jump.position.set(1500, 300, -8000);
      this._scene3.add(jump);
      this._mixer_jump = new THREE.AnimationMixer(jump);
      const rb_jump_action = this._mixer_jump.clipAction(jump.animations[0]);
      rb_jump_action.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (jump2) => {
      jump2.position.set(1500, 300, -8000);
      this._scene4.add(jump2);
      this.mixer_jump2 = new THREE.AnimationMixer(jump2);
      const rb_jump_action2 = this.mixer_jump2.clipAction(jump2.animations[0]);
      rb_jump_action2.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (jump3) => {
      jump3.position.set(1500, 300, -8000);
      this._scene8.add(jump3);
      this._mixer_jump3 = new THREE.AnimationMixer(jump3);
      const rb_jump_action3 = this._mixer_jump3.clipAction(jump3.animations[0]);
      rb_jump_action3.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (jump9) => {
      jump9.position.set(1500, 300, -3000);
      this._scene9.add(jump9);
      this._mixer_jump9 = new THREE.AnimationMixer(jump9);
      const rb_jump_action9 = this._mixer_jump9.clipAction(jump9.animations[0]);
      rb_jump_action9.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Jump.fbx", (jump15) => {
      jump15.position.set(1500, 300, 5000);
      this._scene15.add(jump15);
      this._mixer_jump15 = new THREE.AnimationMixer(jump15);
      const rb_jump_action15 = this._mixer_jump15.clipAction(
        jump15.animations[0]
      );
      rb_jump_action15.play();
    });

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down11) => {
        rb_lay_down11.position.set(1500, 300, 3800);
        rb_lay_down11.rotation.y = Math.PI / -2;
        this._scene11.add(rb_lay_down11);
        this._mixer_laydown11 = new THREE.AnimationMixer(rb_lay_down11);
        const rb_lay_action11 = this._mixer_laydown11.clipAction(
          rb_lay_down11.animations[0]
        );
        rb_lay_action11.setLoop(THREE.LoopOnce);
        rb_lay_action11.clampWhenFinished = true;
        rb_lay_action11.enable = true;
        rb_lay_action11.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down12) => {
        rb_lay_down12.position.set(1500, 300, 3800);
        rb_lay_down12.rotation.y = Math.PI / -2;
        this._scene12.add(rb_lay_down12);
        this._mixer_laydown12 = new THREE.AnimationMixer(rb_lay_down12);
        const rb_lay_action12 = this._mixer_laydown12.clipAction(
          rb_lay_down12.animations[0]
        );
        rb_lay_action12.timeScale = 1000;
        rb_lay_action12.setLoop(THREE.LoopOnce);
        rb_lay_action12.clampWhenFinished = true;
        rb_lay_action12.enable = true;
        rb_lay_action12.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down12_5) => {
        rb_lay_down12_5.position.set(1500, 300, 3800);
        rb_lay_down12_5.rotation.y = Math.PI / -2;
        this._scene12_5.add(rb_lay_down12_5);
        this._mixer_laydown12_5 = new THREE.AnimationMixer(rb_lay_down12_5);
        const rb_lay_action12_5 = this._mixer_laydown12_5.clipAction(
          rb_lay_down12_5.animations[0]
        );
        rb_lay_action12_5.timeScale = 1000;
        rb_lay_action12_5.setLoop(THREE.LoopOnce);
        rb_lay_action12_5.clampWhenFinished = true;
        rb_lay_action12_5.enable = true;
        rb_lay_action12_5.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down13) => {
        rb_lay_down13.position.set(1500, 300, 3800);
        rb_lay_down13.rotation.y = Math.PI / -2;
        this._scene13.add(rb_lay_down13);
        this._mixer_laydown13 = new THREE.AnimationMixer(rb_lay_down13);
        const rb_lay_action13 = this._mixer_laydown13.clipAction(
          rb_lay_down13.animations[0]
        );
        rb_lay_action13.setLoop(THREE.LoopOnce);
        rb_lay_action13.clampWhenFinished = true;
        rb_lay_action13.enable = true;
        rb_lay_action13.timeScale = 1000;
        rb_lay_action13.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/rabbit/lay_down.fbx",
      (rb_lay_down16) => {
        rb_lay_down16.position.set(1500, 300, 3800);
        rb_lay_down16.rotation.y = Math.PI / -2;
        this._scene16.add(rb_lay_down16);
        this._mixer_laydown16 = new THREE.AnimationMixer(rb_lay_down16);
        const rb_lay_action16 = this._mixer_laydown16.clipAction(
          rb_lay_down16.animations[0]
        );
        rb_lay_action16.timeScale = 1000;
        rb_lay_action16.setLoop(THREE.LoopOnce);
        rb_lay_action16.clampWhenFinished = true;
        rb_lay_action16.enable = true;
        rb_lay_action16.play();
      }
    );

    loader.load("samples/threejs/story/data/rabbit/Walk.fbx", (rb_victory) => {
      rb_victory.position.set(1500, 300, 3800);
      rb_victory.rotation.y = Math.PI / -2;
      // this._scene2.add(rb_victory);
      this._mixer5 = new THREE.AnimationMixer(rb_victory);
      const rb_victory_action = this._mixer5.clipAction(
        rb_victory.animations[0]
      );
      rb_victory_action.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Talk.fbx", (talk) => {
      talk.position.set(1500, 300, -8000);
      this._scene7.add(talk);
      this.mixer_talk = new THREE.AnimationMixer(talk);
      const rb_talk_action = this.mixer_talk.clipAction(talk.animations[0]);
      rb_talk_action.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Talk.fbx", (talk10) => {
      talk10.position.set(1500, 300, -8000);
      talk10.rotation.y = Math.PI;
      this._scene10.add(talk10);
      this.mixer_talk10 = new THREE.AnimationMixer(talk10);
      const rb_talk_action10 = this.mixer_talk10.clipAction(
        talk10.animations[0]
      );
      rb_talk_action10.play();
    });

    loader.load("samples/threejs/story/data/rabbit/Talk.fbx", (talk14) => {
      talk14.position.set(1500, 300, 5000);
      talk14.rotation.y = Math.PI / -2;
      this._scene14.add(talk14);
      this.mixer_talk14 = new THREE.AnimationMixer(talk14);
      const rb_talk_action14 = this.mixer_talk14.clipAction(
        talk14.animations[0]
      );
      rb_talk_action14.play();
    });
  }

  _setupTurtle() {
    this._clock = new THREE.Clock();
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/turtle/Crawling.fbx", (turtle) => {
      turtle.position.set(-1500, 650, -8000);
      turtle.scale.set(5, 5, 5);
      this._scene2.add(turtle);
      this._mixer_Crawling = new THREE.AnimationMixer(turtle);
      const tt_craw_action = this._mixer_Crawling.clipAction(
        turtle.animations[0]
      );
      tt_craw_action.play();
    });

    loader.load("samples/threejs/story/data/turtle/Crawling.fbx", (turtle2) => {
      turtle2.position.set(-1500, 650, -8000);
      turtle2.scale.set(5, 5, 5);
      this._scene8.add(turtle2);
      this._mixer_Crawling2 = new THREE.AnimationMixer(turtle2);
      const tt_craw_action2 = this._mixer_Crawling2.clipAction(
        turtle2.animations[0]
      );
      tt_craw_action2.play();
    });

    loader.load("samples/threejs/story/data/turtle/Crawling.fbx", (turtle9) => {
      turtle9.position.set(-1500, 650, -6000);
      turtle9.scale.set(5, 5, 5);
      this._scene9.add(turtle9);
      this._mixer_Crawling9 = new THREE.AnimationMixer(turtle9);
      const tt_craw_action9 = this._mixer_Crawling9.clipAction(
        turtle9.animations[0]
      );
      tt_craw_action9.play();
    });

    loader.load(
      "samples/threejs/story/data/turtle/Crawling.fbx",
      (turtle10) => {
        turtle10.position.set(-1500, 650, -6000);
        turtle10.scale.set(5, 5, 5);
        this._scene10.add(turtle10);
        this._mixer_Crawling10 = new THREE.AnimationMixer(turtle10);
        const tt_craw_action10 = this._mixer_Crawling10.clipAction(
          turtle10.animations[0]
        );
        tt_craw_action10.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/turtle/Crawling.fbx",
      (turtle12) => {
        turtle12.position.set(-500, 650, 2000);
        turtle12.scale.set(5, 5, 5);
        this._scene12.add(turtle12);
        this._mixer_Crawling12 = new THREE.AnimationMixer(turtle12);
        const tt_craw_action12 = this._mixer_Crawling12.clipAction(
          turtle12.animations[0]
        );
        tt_craw_action12.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/turtle/Crawling.fbx",
      (turtle12_5) => {
        turtle12_5.position.set(500, 650, 3500);
        turtle12_5.rotation.set(0, Math.PI / 2, 0);
        turtle12_5.scale.set(5, 5, 5);
        this._scene12_5.add(turtle12_5);
        this._mixer_Crawling12_5 = new THREE.AnimationMixer(turtle12_5);
        const tt_craw_action12_5 = this._mixer_Crawling12_5.clipAction(
          turtle12_5.animations[0]
        );
        tt_craw_action12_5.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/turtle/Crawling.fbx",
      (turtle16) => {
        turtle16.position.set(500, 650, 3500);
        turtle16.scale.set(5, 5, 5);
        this._scene16.add(turtle16);
        this._mixer_Crawling16 = new THREE.AnimationMixer(turtle16);
        const tt_craw_action16 = this._mixer_Crawling16.clipAction(
          turtle16.animations[0]
        );
        tt_craw_action16.play();
      }
    );

    loader.load(
      "samples/threejs/story/data/turtle/Breakdance.fbx",
      (tt_victory) => {
        tt_victory.position.set(-1500, 650, 8000);
        tt_victory.rotation.set(0, Math.PI, 0);
        tt_victory.scale.set(5, 5, 5);
        this._scene17.add(tt_victory);
        this._mixer_victory = new THREE.AnimationMixer(tt_victory);
        const tt_victory_action = this._mixer_victory.clipAction(
          tt_victory.animations[0]
        );
        tt_victory_action.play();
      }
    );

    loader.load("samples/threejs/story/data/turtle/Angry.fbx", (angry) => {
      angry.position.set(-1500, 350, -8000);
      angry.scale.set(5, 5, 5);
      this._scene5.add(angry);
      this.mixer_angry = new THREE.AnimationMixer(angry);
      const tt_action_angry = this.mixer_angry.clipAction(angry.animations[0]);
      tt_action_angry.play();
    });

    loader.load("samples/threejs/story/data/turtle/Angry.fbx", (angry15) => {
      angry15.position.set(0, 300, 2500);
      angry15.scale.set(5, 5, 5);
      this._scene15.add(angry15);
      this.mixer_angry15 = new THREE.AnimationMixer(angry15);
      const tt_action_angry15 = this.mixer_angry15.clipAction(
        angry15.animations[0]
      );
      tt_action_angry15.play();
    });

    loader.load("samples/threejs/story/data/turtle/Talking.fbx", (talk) => {
      talk.position.set(-1500, 350, -8000);
      talk.scale.set(5, 5, 5);
      this._scene6.add(talk);
      this.mixer_talking = new THREE.AnimationMixer(talk);
      const tt_action_talk = this.mixer_talking.clipAction(talk.animations[0]);
      tt_action_talk.play();
    });

    loader.load("samples/threejs/story/data/turtle/Talking.fbx", (talk13) => {
      talk13.position.set(1500, 300, 2500);
      talk13.scale.set(5, 5, 5);
      this._scene13.add(talk13);
      this.mixer_talking13 = new THREE.AnimationMixer(talk13);
      const tt_action_talk13 = this.mixer_talking13.clipAction(
        talk13.animations[0]
      );
      tt_action_talk13.play();
    });

    loader.load("samples/threejs/story/data/turtle/Talking.fbx", (talk14) => {
      talk14.position.set(1500, 300, 2500);
      talk14.scale.set(5, 5, 5);
      this._scene14.add(talk14);
      this.mixer_talking14 = new THREE.AnimationMixer(talk14);
      const tt_action_talk14 = this.mixer_talking14.clipAction(
        talk14.animations[0]
      );
      tt_action_talk14.play();
    });
  }

  _setupTree() {
    const loader = new FBXLoader();
    loader.load("samples/threejs/story/data/Tree1.fbx", (tree) => {
      tree.position.set(3000, 100, 4000);
      tree.scale.set(5, 5, 5);
      this._scene2.add(tree);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree3) => {
      tree3.position.set(3000, 100, 4000);
      tree3.scale.set(5, 5, 5);
      this._scene3.add(tree3);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree8) => {
      tree8.position.set(3000, 100, 4000);
      tree8.scale.set(5, 5, 5);
      this._scene8.add(tree8);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree9) => {
      tree9.position.set(3000, 100, 4000);
      tree9.scale.set(5, 5, 5);
      this._scene9.add(tree9);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree10) => {
      tree10.position.set(3000, 100, 4000);
      tree10.scale.set(5, 5, 5);
      this._scene10.add(tree10);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree11) => {
      tree11.position.set(3000, 100, 4000);
      tree11.scale.set(5, 5, 5);
      this._scene11.add(tree11);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree12) => {
      tree12.position.set(3000, 100, 4000);
      tree12.scale.set(5, 5, 5);
      this._scene12.add(tree12);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree12_5) => {
      tree12_5.position.set(3000, 100, 4000);
      tree12_5.scale.set(5, 5, 5);
      this._scene12_5.add(tree12_5);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree13) => {
      tree13.position.set(3000, 100, 4000);
      tree13.scale.set(5, 5, 5);
      this._scene13.add(tree13);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree14) => {
      tree14.position.set(3000, 100, 4000);
      tree14.scale.set(5, 5, 5);
      this._scene14.add(tree14);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree15) => {
      tree15.position.set(3000, 100, 4000);
      tree15.scale.set(5, 5, 5);
      this._scene15.add(tree15);
    });

    loader.load("samples/threejs/story/data/Tree1.fbx", (tree16) => {
      tree16.position.set(3000, 100, 4000);
      tree16.scale.set(5, 5, 5);
      this._scene16.add(tree16);
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

      case 3:
        this.scene3(this.delta);
        this._renderer.render(this._scene3, this._camera);
        this._controls.update();
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;

      case 4:
        this.scene4(this.delta);
        this._renderer.render(this._scene4, this._camera4);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;

      case 5:
        this.scene5(this.delta);
        this._renderer.render(this._scene5, this._camera5);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;

      case 6:
        this.scene6(this.delta);
        this._renderer.render(this._scene6, this._camera6);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;

      case 7:
        this.scene7(this.delta);
        this._renderer.render(this._scene7, this._camera7);
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
        break;

      case 8:
        this.scene8(this.delta);
        this._renderer.render(this._scene8, this._camera);
        this._controls.update();
        this.update(time);

        requestAnimationFrame(this.render.bind(this));

        break;

      case 9:
        this.scene9(this.delta);
        this._renderer.render(this._scene9, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 10:
        this.scene10(this.delta);
        this._renderer.render(this._scene10, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 11:
        this.scene11(this.delta);
        this._renderer.render(this._scene11, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 12:
        this.scene12(this.delta);
        this._renderer.render(this._scene12, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 12.5:
        if (this.stt) {
          new STT(this);

          this.call = function (msg) {
            if (msg == "깨운다") {
              this.stt = false;
              this.page = 13;
            } else if (msg == "무시한다") {
              this.stt = false;
              this.page = 16;
            }
          };
          this.stt = false;
        }

        this.scene12_5(this.delta);
        this._renderer.render(this._scene12_5, this._camera12_5);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 13:
        this.scene13(this.delta);
        this._renderer.render(this._scene13, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 14:
        this.scene14(this.delta);
        this._renderer.render(this._scene14, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 15:
        this.scene15(this.delta);
        this._renderer.render(this._scene15, this._camera);
        this._controls.update();
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 16:
        this.scene16(this.delta);
        this._renderer.render(this._scene16, this._camera16);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;

      case 17:
        this.scene17(this.delta);
        this._renderer.render(this._scene17, this._camera);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));

        break;
    }
  }

  update(time) {
    time += 0.001; // second unit
    this.delta = this._clock.getDelta();
  }

  scene1() {
    if (this._camera.position == (-12500, 5000, -300)) {
      pass;
    } else {
      this._controls.enabled = false;
      this._camera.position.set(-12500, 5000, -300);
      if (!this.finish) {
        this.finish = true;
        if (this.playing) {
          this._s1_Audio();
          this.playing = false;
        }
        setTimeout(() => {
          this.playing = true;
          this.page = 2;
        }, 4000);
      }
    }
  }

  scene2(delta) {
    if (this._camera.position == (-4000, 1500, -4500)) {
      pass;
    } else {
      if (this.playing) {
        this._s2_Audio();
        this.playing = false;
      }
      this._camera.position.set(-4000, 1500, -4500);
      this._mixer_Crawling.update(delta);
      this._mixer_Crawling._root.position.z += 20;
    }
    if (this._mixer_Crawling._root.position.z >= -350) {
      this._mixer_Crawling._root.position.z = 800000;
      this.playing = true;
      this.page = 3;
    }
  }

  scene3(delta) {
    if (this._camera.position == (980, 2200, 3000)) {
      pass;
    } else {
      if (this.playing) {
        this._s3_Audio();
        this.playing = false;
      }
      this._camera.position.set(1280, 1000, 2000);
      // this._camera.rotation.y = Math.PI / -2;
      this._mixer_jump.update(delta);
      this._mixer_jump._root.position.z += 30;
    }
    if (this._mixer_jump._root.position.z > 2000) {
      this._mixer_jump._root.position.z = 800000;
      this.playing = true;
      this.page = 4;
    }
  }

  scene4(delta) {
    if (this.playing) {
      this._s4_Audio();
      this.playing = false;
    }
    if (this.mixer_jump2) {
      this.mixer_jump2.update(delta);
      setTimeout(() => {
        this.page = 5;
      }, 5000);
    }
  }

  scene5(delta) {
    if (!this.finish5) {
      this.playing = true;
      this.finish5 = true;
      if (this.playing) {
        this._s5_Audio();
        this.playing = false;
      }
    }
    if (this.mixer_angry) {
      this.mixer_angry.update(delta);
      setTimeout(() => {
        this.page = 6;
      }, 5000);
    }
  }

  scene6(delta) {
    if (!this.finish6) {
      this.playing = true;
      this.finish6 = true;
      if (this.playing) {
        this._s6_Audio();
        this.playing = false;
      }
    }
    if (this.mixer_talking) {
      this.mixer_talking.update(delta);
      setTimeout(() => {
        this.page = 7;
      }, 5000);
    }
  }

  scene7(delta) {
    if (!this.finish7) {
      this.playing = true;
      this.finish7 = true;
      if (this.playing) {
        this._s7_Audio();
        this.playing = false;
      }
    }
    if (this.mixer_talk) {
      this.mixer_talk.update(delta);
      setTimeout(() => {
        this.page = 8;
      }, 5000);
    }
  }

  scene8(delta) {
    if (!this.finish8) {
      this.playing = true;
      this.finish8 = true;
      if (this.playing) {
        this._s8_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-12500, 7000, -300)) {
      this._camera.position.set(-12500, 7000, -300);
      if (this._mixer_jump3) {
        this._mixer_jump3.update(delta);

        setTimeout(() => {
          this._mixer_jump3._root.position.z += 20;
        }, 2000);

        if (this._mixer_jump3._root.position.z >= -3000) {
          this.page = 9;
        }
      }
      if (this._mixer_Crawling2) {
        this._mixer_Crawling2.update(delta);
        setTimeout(() => {
          this._mixer_Crawling2._root.position.z += 3;
        }, 2000);
      }
    }
  }

  scene9(delta) {
    if (!this.finish9) {
      this.playing = true;
      this.finish9 = true;
      if (this.playing) {
        this._s9_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-5000, 4000, 0)) {
      this._camera.position.set(-5000, 4000, 0);
      if (this._mixer_jump9) {
        this._mixer_jump9.update(delta);
        this._mixer_jump9._root.position.z += 25;
      }
      if (this._mixer_Crawling9) {
        this._mixer_Crawling9.update(delta);
        this._mixer_Crawling9._root.position.z += 1;
      }
    }
    setTimeout(() => {
      this.page = 10;
    }, 4000);
  }

  scene10(delta) {
    if (!this.finish10) {
      this.playing = true;
      this.finish10 = true;
      if (this.playing) {
        this._s10_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (1250, 2000, 6700)) {
      this._camera.position.set(1250, 2000, 6700);
      this._camera.rotation.set(0, 0, 0);
      this.mixer_talk10._root.position.z = 3500;
      this.mixer_talk10.update(delta);
    }
    if (this._mixer_Crawling10) {
      this._mixer_Crawling10.update(delta);
      this._mixer_Crawling10._root.position.z += 3;
    }
    setTimeout(() => {
      this.page = 11;
    }, 5000);
  }

  scene11(delta) {
    if (!this.finish11) {
      this.playing = true;
      this.finish11 = true;
      if (this.playing) {
        this._s11_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-4710, 1500, 3170)) {
      this._camera.position.set(-4710, 1500, 3170);
      this._camera.rotation.set(0, Math.PI / -2, 0);
      if (this._mixer_laydown11) {
        this._mixer_laydown11.update(delta);
      }
    }
    setTimeout(() => {
      this.page = 12;
    }, 8000);
  }

  scene12(delta) {
    if (!this.finish12) {
      this.playing = true;
      this.finish12 = true;
      if (this.playing) {
        this._s12_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position.set(-2000, 1850, 4500)) {
      this._camera.position.set(-2000, 1850, 4500);
      this._camera.rotation.set(0, Math.PI / -2, 0);
      if (this._mixer_Crawling12) {
        if (this._mixer_Crawling12._root.position.z > 3700) {
          this._mixer_Crawling12._root.rotation.set(0, Math.PI / 2, 0);
          this._mixer_Crawling12._root.position.x += 5;
          if (this._mixer_Crawling12._root.position.x >= 0) {
            this.page = 12.5;
          }
        } else {
          this._mixer_Crawling12._root.position.z += 10;
        }
        this._mixer_Crawling12.update(delta);
      }
      if (this._mixer_laydown12) {
        this._mixer_laydown12.update(delta);
      }
    }
  }

  scene12_5(delta) {
    if (this._mixer_Crawling12_5) {
      this._mixer_Crawling12_5.update(delta);
    }
    if (this._mixer_laydown12_5) {
      this._mixer_laydown12_5.update(delta);
    }
  }

  scene13(delta) {
    if (!this.finish13) {
      this.playing = true;
      this.finish13 = true;
      if (this.playing) {
        this._s13_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-4710, 1500, 3170)) {
      this._camera.position.set(-4710, 1500, 3170);
      this._camera.rotation.set(0, Math.PI / -2, 0);
      if (this._mixer_laydown13) {
        this._mixer_laydown13.update(delta);
      }
      if (this.mixer_talking13) {
        this.mixer_talking13.update(delta);
      }
    }
    setTimeout(() => {
      this.page = 14;
    }, 5000);
  }

  scene14(delta) {
    if (!this.finish14) {
      this.playing = true;
      this.finish14 = true;
      if (this.playing) {
        this._s14_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-4710, 1500, 3170)) {
      this._camera.position.set(-4710, 1500, 3170);
      this._camera.rotation.set(0, Math.PI / -2, 0);
      if (this.mixer_talking14) {
        this.mixer_talking14.update(delta);
      }
      if (this.mixer_talk14) {
        this.mixer_talk14.update(delta);
      }
      setTimeout(() => {
        this.page = 15;
      }, 6000);
    }
  }

  scene15(delta) {
    if (!this.finish15) {
      this.playing = true;
      this.finish15 = true;
      if (this.playing) {
        this._s15_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (0, 1500, 0)) {
      this._camera.position.set(0, 1500, 0);
      this._camera.rotation.set(0, Math.PI, 0);
      if (this._mixer_jump15) {
        this._mixer_jump15.update(delta);
        this._mixer_jump15._root.position.z += 20;
      }
      if (this.mixer_angry15) {
        this.mixer_angry15.update(delta);
      }
    }
  }

  scene16(delta) {
    if (!this.finish16) {
      this.playing = true;
      this.finish16 = true;
      if (this.playing) {
        this._s16_Audio();
        this.playing = false;
      }
    }
    if (this._mixer_Crawling16) {
      this._mixer_Crawling16._root.position.z += 10;
      if (this._mixer_Crawling16._root.position.z > 8000) {
        this.page = 17;
      }
      this._mixer_Crawling16.update(delta);
    }

    if (this._mixer_laydown16) {
      this._mixer_laydown16.update(delta);
    }
  }

  scene17(delta) {
    if (!this.finish17) {
      this.playing = true;
      this.finish17 = true;
      if (this.playing) {
        this._s17_Audio();
        this.playing = false;
      }
    }
    if (this._camera.position != (-1500, 1650, 5000)) {
      this._camera.position.set(-1500, 1650, 5000);
      this._camera.rotation.set(0, Math.PI, 0);
    }
    if (this._mixer_victory) {
      this._mixer_victory.update(delta);
    }
  }
}

window.onload = function () {
  new App();
};
