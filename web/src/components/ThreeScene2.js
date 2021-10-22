import React, { Component } from "react";
import * as THREE from "three";

//https://codepen.io/negan1911/pen/GLbBGm
//https://codepen.io/wrtchd/pen/mJOGap soft edges
class SceneThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }
  createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
    let shape = new THREE.Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(
      width - radius * 2,
      height - radius * 2,
      eps,
      Math.PI / 2,
      0,
      true
    );
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    let geometry = new THREE.ExtrudeBufferGeometry(shape, {
      amount: depth - radius0 * 2,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness,
    });

    geometry.center();

    return geometry;
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    camera.position.set(0, 0, 20);

    const geometry = this.createBoxWithRoundedEdges(3.5, 3.5, 3.5, 0.2, 16);
    // const geometry = new THREE.BoxGeometry(3, 3, 3);

    const material = new THREE.MeshPhongMaterial({
      color: 0x800000,
      wireframe: false,
    });
    const cubeA = new THREE.Mesh(geometry, material);
    cubeA.position.set(2, -2, 0);
    const cubeB = new THREE.Mesh(geometry, material);
    cubeB.position.set(-2, -2, 0);

    //create a group and add the two cubes
    //These cubes can now be rotated / scaled etc as a group
    const row1 = new THREE.Object3D();
    row1.add(cubeA);
    row1.add(cubeB);
    const row2 = row1.clone();
    row2.position.set(0, 0, -4);
    const row3 = row1.clone();
    row3.position.set(0, 4, 0);
    const row4 = row1.clone();
    row4.position.set(0, 4, -4);
    const complete = new THREE.Object3D();
    complete.add(row1);
    complete.add(row2);
    complete.add(row3);
    complete.add(row4);
    scene.add(complete);

    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(0, 20, 0);
    scene.add(light);
    const light2 = new THREE.SpotLight(0xffffff, 1);
    light2.position.set(-10, -20, 20);
    scene.add(light2);
    renderer.setClearColor(0x080808, 0);
    scene.fog = new THREE.Fog(0xffffff, 0.25, 100);

    this.mainCube = complete;
    this.cubeA = cubeA;
    this.cubeB = cubeB;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }
  resizeCanvasToDisplaySize() {
    const canvas = this.renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      // update any render target sizes here
    }
  }
  animate() {
    this.mainCube.rotation.x += 0.002;
    this.mainCube.rotation.y += 0.002;
    var tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov) / 2);
    var windowHeight = window.innerHeight;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.fov =
      (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / windowHeight));
    this.camera.updateProjectionMatrix();
    this.resizeCanvasToDisplaySize();

    // this.renderer.setSize(window.innerWidth - 18, window.innerHeight);
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        className="three"
        ref={(mount) => {
          this.mount = mount;
        }}
      ></div>
    );
  }
}

export default SceneThree;
