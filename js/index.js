const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70,width/height,1,1000)
camera.position.set(10,10,10)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha:true,
})

renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild(renderer.domElement)

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true } ); 
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );

const pointLight = new THREE.PointLight(0xffffff, 1000, 100)
pointLight.position.set( 5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

torus.rotation.y = 77;

function animate() {

 

    requestAnimationFrame( animate );
  
   
    torus.rotation.y += 0.005;
    
  
  
    renderer.render( scene, camera );
    
  }
  
  animate()