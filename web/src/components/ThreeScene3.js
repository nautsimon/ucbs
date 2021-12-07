import React, { Component } from "react";
import * as THREE from "three";
import SimplexNoise from "simplex-noise";
import { NavLink } from "react-router-dom";
import sky from "../imgs/outlineSky.png";
//https://codepen.io/negan1911/pen/GLbBGm
//https://codepen.io/wrtchd/pen/mJOGap soft edges
const noise = new SimplexNoise();
class SceneThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // camera.rotation.z = Math.PI / 3;
    // camera.rotation.y = Math.PI / 2;
    camera.position.set(0, 0, 125);

    //
    var geometry = new THREE.PlaneBufferGeometry(400, 300, 100, 100);
    geometry.dynamic = true;

    var dMaterial = new THREE.MeshBasicMaterial({
      color: 0x800000,
      wireframe: true,
    });
    var plane = new THREE.Mesh(geometry, dMaterial);

    plane.rotation.x = Math.PI / 2;
    // plane.rotation.y = Math.PI / 2;
    // plane.rotation.z =Math.PI / 4;
    plane.position.set(0, -20, -30);
    scene.add(plane);
    // var plane2 = plane.clone();

    // plane2.position.set(0, -30, 0);
    // scene.add(plane2);
    // const light = new THREE.AmbientLight(0xffffff); // soft white light
    // scene.add(light);
    renderer.setClearColor(0x000000, 1);
    scene.fog = new THREE.Fog(0x000000, 0.0025, 200);

    this.plane = plane;
    renderer.setPixelRatio(window.devicePixelRatio)
    // this.plane2 = plane2;
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
    // this.camera.rotation.z += 0.002;
    let pos = this.plane.geometry.getAttribute("position");
    let pa = pos.array;
    var hVerts = this.plane.geometry.parameters.height + 1;
    var wVerts = this.plane.geometry.parameters.width + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        let x = pa[3 * (j * wVerts + i)];
        let y = pa[3 * (j * wVerts + i) + 1];
        var amp = 1.115;
        const time = Date.now();
        pa[3 * (j * wVerts + i) + 2] =
          noise.noise2D(x + time * 0.0003, y + time * 0.0001) * 2 * amp;
      }
    }
    this.plane.geometry.getAttribute("position").needsUpdate = true;

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
      <div>
        <div
          className="three"
          ref={(mount) => {
            this.mount = mount;
          }}
        ></div>
        <div className="tempMain">
        <img className="backgroundSkyline" alt="skyline" src={sky}/>

          <div className="tempCenter">
            <p className="mainTitle"><span className="maroonText">Blockchain</span> <span className="maroonText">Chicago</span></p> 
            <hr className="maroonLine" />
            <div className="menu">
              <NavLink
                className="navLinkText hoverB"
                activeClassName="linkActive"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className="navLinkText hoverB"
                activeClassName="linkActive"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="navLinkText hoverB"
                activeClassName="linkActive"
                to="/apply"
              >
                Apply
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SceneThree;
