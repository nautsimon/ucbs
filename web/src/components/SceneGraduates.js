import React, { Component } from "react";
import * as THREE from "three";
import logo from "../imgs/logoDouble.png";
import SimplexNoise from "simplex-noise";
import "./certificate.css";
//https://codepen.io/negan1911/pen/GLbBGm
//https://codepen.io/wrtchd/pen/mJOGap soft edges
var counter = 0;
const noise = new SimplexNoise();
class SceneThree extends Component {
  constructor(props) {
    super(props);
    this.state = { popup: false };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 15000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    camera.rotation.x = Math.PI / 2;

    camera.position.set(0, -2, 0);

    // var incrm = 0;
    // for (var i = 0; i < 5; i += 1) {
    //   var xC = 4 - i;
    //   incrm = 0;
    //   tubePoints.push(new THREE.Vector3(0, 0, 3 * (i * 4)));
    // }

    // var curve = new THREE.CatmullRomCurve3(tubePoints);
    // curve.type = "catmullrom";

    // var geometry = new THREE.TubeBufferGeometry(curve, 100, 4, 100, false);
    var geometry = new THREE.CylinderBufferGeometry(7, 7, 20, 64, 32);

    // var geometry = new THREE.PlaneBufferGeometry(400, 400, 50, 50);
    geometry.dynamic = true;
    // console.log(geometry);
    // this.planeCurve(geometry, 0.1);
    // console.log(geometry);
    console.log(geometry);
    // let pos = geometry.attributes.position;
    // let pa = pos.array;
    // var hVerts = geometry.parameters.height + 1;
    // var wVerts = geometry.parameters.width + 1;
    // for (let j = 0; j < hVerts; j++) {
    //   for (let i = 0; i < wVerts; i++) {
    //     let x = pa[3 * (j * wVerts + i)];
    //     let y = pa[3 * (j * wVerts + i) + 1];

    //     pa[3 * (j * wVerts + i) + 2] = Math.pow(2, i / 20);
    //   }
    //}
    // for (var i = 0; i < geometry.vertices.length / 2; i++) {
    //   geometry.vertices[2 * i].position.z = Math.pow(2, i / 20);
    //   geometry.vertices[2 * i + 1].position.z = Math.pow(2, i / 20);
    // }
    // var dMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xffffff,
    //   wireframe: true,
    // });
    var dMaterial = [
      new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true }),
      new THREE.MeshPhongMaterial({
        color: 0x000000,
        transparent: true,
        side: THREE.DoubleSide,
        opacity: 0.0,
      }),
    ];
    var tubeMesh = new THREE.Mesh(geometry, dMaterial);
    // tubeMesh.rotation.x = -0.15;
    // tubeMesh.rotation.y = -0.25;
    //tubeMesh.rotation.z = -0.57;
    // tubeMesh.rotation.x = Math.PI / 2;
    // tubeMesh.rotation.z = Math.PI / 4;
    tubeMesh.position.set(0, 20, 0);
    tubeMesh.rotation.z = Math.PI * 0.5;
    scene.add(tubeMesh);
    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);
    renderer.setClearColor(0x1b191a, 1);
    scene.fog = new THREE.Fog(0x000000, 0.025, 100);
    renderer.setPixelRatio(window.devicePixelRatio);

    this.tubeMesh = tubeMesh;
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
    // let pos = this.tubeMesh.geometry.getAttribute("position");
    // let pa = pos.array;
    if (counter === 0) {
      console.log(this.tubeMesh.geometry);
    }
    if (counter >= 3.0 && counter < 3.1) {
      console.log("sdsa", this.tubeMesh.geometry);
    }
    this.tubeMesh.rotation.x += 0.001;
    this.tubeMesh.rotation.y -= 0.001;

    counter += 0.01;
    let pos = this.tubeMesh.geometry.getAttribute("position");
    let pa = pos.array;
    let paLen = pos.array.length;

    for (let i = 0; i < paLen; i += 3) {
      // let x = pa[i] + 0.01;
      // let y = pa[i + 2] + 0.01;
      // let z = pa[i + 1] + 0.01;

      //x -> left/right -> pa[i] = pa[i] + 0.001;
      //y-> up/down -> pa[i + 2] = pa[i + 2] + 0.001;
      //z-> foward/back -> pa[i + 1] = pa[i + 1] + 0.001;
      // pa[i + 1] = pa[i + 1] + 0.001;
      var amp = 0.0015;
      const time = Date.now();
      pa[i + 2] =
        pa[i + 2] -
        noise.noise2D(
          pa[i] + time * 0.0001,

          pa[i + 1] + time * 0.0001
        ) *
          amp;
      pa[i + 0] =
        pa[i + 0] -
        noise.noise2D(pa[i + 2] + time * 0.001, pa[i + 1] + time * 0.0001) *
          amp;

      // pa[i + 1] =
      //   pa[i + 1] +
      //   noise.noise3D(
      //     pa[i] + time * 0.0003,
      //     pa[i + 2] + time * 0.001,
      //     pa[i + 1] + time * 0.0001
      //   ) *
      //     amp;
    }

    // for (let depthIndex = 0; depthIndex < depthV; depthIndex++) {
    //   for (let discIndex = 0; discIndex < discV; discIndex++) {
    //     let x = pa[depthIndex * discV + 3 * discIndex];
    //     let y = pa[depthIndex * discV + 3 * discIndex + 1];
    //     var amp = counter <= 0.1 ? counter : 0.1;
    //     const time = Date.now();
    //     pa[depthIndex * discV + 3 * discIndex] = x + 0.001;
    //     pa[depthIndex * discV + 3 * discIndex + 1] = y + 0.001;
    //     // pa[depthIndex * discV + 3 * discIndex] =
    //     //   noise.noise2D(x + time * 0.00003, y + time * 0.0003) * amp;
    //     // const time2 = Date.now();
    //     // pa[depthIndex * discV + 3 * discIndex + 1] =
    //     //   noise.noise2D(x + time2 * 0.0003, y + time2 * 0.0003) * amp;
    //   }
    // }

    // var hVerts = this.tubeMesh.geometry.parameters.tubularSegments + 1;
    // var wVerts = this.tubeMesh.geometry.parameters.radialSegments + 1;
    // for (let j = 0; j < hVerts; j++) {
    //   for (let i = 0; i < wVerts; i++) {
    //     let x = pa[3 * (j * wVerts + i) + 1];
    //     let y = pa[3 * (j * wVerts + i)];
    //     var amp = counter <= 0.1 ? counter : 0.1;
    //     const time = Date.now();
    //     pa[3 * (j * wVerts + i) + 2] =
    //       noise.noise2D(x + time * 0.0003, y + time * 0.0001) * 2 * amp;

    //     // pa[2 * (j * wVerts + i) + 2] = i;
    //   }
    // }
    // for (let j = 0; j < hVerts; j = j + 0.1) {
    //   if ((j + 1) % 3 === 0) {
    //     pa[j] = j;
    //   }
    // }

    this.tubeMesh.geometry.getAttribute("position").needsUpdate = true;
    // var hVerts = this.tubeMesh.geometry.parameters.path + 1;
    // var wVerts = this.tubeMesh.geometry.parameters.width + 1;
    // for (let j = 0; j < hVerts; j++) {
    //   for (let i = 0; i < wVerts; i++) {
    //     let x = pa[3 * (j * wVerts + i)];
    //     let y = pa[3 * (j * wVerts + i) + 1];
    //     var amp = counter <= 2.115 ? counter : 2.115;
    //     const time = Date.now();
    //     pa[3 * (j * wVerts + i) + 2] =
    //       noise.noise2D(x + time * 0.0003, y + time * 0.0001) * 2 * amp;
    //   }
    // }
    // this.tubeMesh.geometry.parameters.path.points[0].z += 0.002;

    // this.tubeMesh.geometry.parameters.path.needsUpdate = true;

    // if (this.camera.rotation.z <= Math.PI) {
    //   let displacement = -counter * counter + 2.115 * counter;
    //   this.camera.rotation.z += displacement * 0.005;
    // }
    // if (counter < 2.115) {
    //   counter += 0.005;
    //   let displacement = -counter * counter + 2.115 * counter;
    //   this.camera.position.z -= displacement * 0.5;
    // } else {
    //   if (counter < 4.23) {
    //     counter += 0.009;
    //     let c = counter - 2.115;
    //     let displacement = -c * c + 2.115 * c;
    //     this.plane.position.y += displacement * 0.5;
    //     this.plane2.position.y -= displacement * 0.5;
    //   }
    // }
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
  closePopup() {
    this.setState({ popup: false });
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

        <div className="tempMain ">
          <div className="tempCenterBackground">
          <div className="tempCenter">
            <div className="logoOuterDivCertificate">
              <img src={logo} alt="logo" className="logoStylingCertificate" />
            </div>
            <p className="mainTitleCertificateLg">Certificate of Completion</p>

            <p className="width400">
              This certifies that <b>{this.props.name}</b> completed the
              requirements to graduate from the Blockchain Chicago Spring '22
              cohort.
            </p>
          </div>
        </div></div>
      </div>
    );
  }
}

export default SceneThree;
