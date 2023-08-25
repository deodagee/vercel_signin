import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'
import styles from "../../styles/glb.module.css"

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(false)
  const refRenderer = useRef()
  
  const urlDogGLB = '/dog.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); 

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        8,
        20 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 5.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        9.01,
        
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enabled = controlsEnabled; 
      controls.target = target

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI *20

          camera.position.y = 17
          camera.position.x = 
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = 
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [controlsEnabled])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  const handleButtonClick = () => {
    if (!buttonClicked) {
      setControlsEnabled(true); // Enable controls when the button is clicked for the first time
    } else {
      setControlsEnabled(false); // Disable controls when the button is clicked again
    }
    setButtonClicked((prevClicked) => !prevClicked); // Toggle the button click status
  };

  return (
    <>
          <div className={styles.parentcontainer}>
      <DogContainer  ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
          <div >
        <button className={styles.button} onClick={handleButtonClick}>
          {buttonClicked ? 'Release Animation' : 'Click to control Glb'}
        </button>
         <p className={styles.paragraph}>
          For The Curious: Click the button to interact with the GLB Image above. Click again to Release controls. A GLB file is a
          binary file format used for storing 3D models and their associated data. GLB files are widely used in
          web-based 3D applications, virtual reality (VR) experiences, augmented reality (AR) applications, and game
          development. They are supported by various 3D software, libraries, and engines, as well as web browsers with
          WebGL capabilities!
        </p>
      </div>
      </div>  
    </>
  );
};

export default VoxelDog