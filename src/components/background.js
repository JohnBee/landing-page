import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import Dot from "./textures/dot.png";


export class Scene extends React.Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.pi = 0;
  }
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true })

    scene.fog = new THREE.Fog( 0x264653, 0.001 );

    camera.position.z = 4
    renderer.setClearColor( 0x000000, 0 ); // the default
    // renderer.setSize(width, height)


    const vertices = [];
    const colors = []
    const geometry = new THREE.BufferGeometry();
    const sprite = new THREE.TextureLoader().load(Dot);
    const density = 500;
    const density_half = density / 2;
    for ( let i = 0; i < 10000; i ++ ) {

      const x = density * Math.random() - density_half;
      const y = density * Math.random() - density_half;
      const z = density * Math.random() - density_half;

      vertices.push( x, y, z );
      colors.push(0,0,0);

    }
    
    
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ))

    const material = new THREE.PointsMaterial( { 
      size: 3,
      sizeAttenuation: true,
      map: sprite, 
      alphaTest: 0.5,
      transparent: true,
      vertexColors: true,
      } );
    // material.color.setHSL( 0.0, 0.0, 0.0 );

    const particles = new THREE.Points( geometry, material );

    scene.add( particles );
    

    camera.position.z = 100;
    this.particles = particles;
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }
  resizeCanvasToDisplaySize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
  
    if (canvas.width !== width || canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {

    
    this.resizeCanvasToDisplaySize();
    var time = Date.now() * 0.0001;
    // console.log(time);
    this.particles.rotation.y = time;
    this.particles.rotatex = time;
    this.pi += 0.2;
    for ( let i = 0; i < this.particles.geometry.attributes.position.count; i ++ ) {
      let p = Math.sin((this.pi+(this.particles.geometry.attributes.position.array[i*3]/1000)*360)*0.017453);
      this.particles.geometry.attributes.color.array[i*3]=p;
      this.particles.geometry.attributes.color.array[i*3+1]=p;
      this.particles.geometry.attributes.color.array[i*3+2]=p;
    }
    this.particles.geometry.attributes.color.needsUpdate = true;
    
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }
  

  render() {
    return (
      <div
        style={{ width: '100vw', height: '100vh', display: 'block', position: 'fixed', zIndex: '-9999'}}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
