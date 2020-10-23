var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,10000)
camera.position.z = 6;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5")
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement)


//adding a window event listner to adjust the size of the scene automatically
window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight; //aspect ratio of the camera
    camera.updateProjectionMatrix();
})

//Add an Orbit control to the scene
//Orbit controls allow the camera to orbit around a target.
controls = new THREE.OrbitControls(camera,renderer.domElement)


/*****************************ADDING LIGHT AND TONEMAPPING*************************************/
var hemiLight = new THREE.HemisphereLight(0xffeeb1,0x080820,1)
scene.add(hemiLight)

renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;


//ADD Axes Helper
//scene.add(new THREE.AxesHelper(500))

/*********************************CREATING ROOMS WALLS****************************************/
var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF,opacity: 0.3,transparent: true })
var wall1 = new THREE.Mesh(geometry,material)

var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF,opacity: 0.3,transparent: true })
var wall2 = new THREE.Mesh(geometry,material)

var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF,opacity: 0.3,transparent: true })
var wall3 = new THREE.Mesh(geometry,material)

var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xECEA1B,opacity: 0.3,transparent: true })
var wall4 = new THREE.Mesh(geometry,material)

var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xECEA1B,opacity: 0.3,transparent: true })
var wall5 = new THREE.Mesh(geometry,material)

var geometry = new THREE.BoxGeometry()
var material = new THREE.MeshLambertMaterial({ color: 0xECEA1B,opacity: 0.3,transparent: true })
var wall6 = new THREE.Mesh(geometry,material)


//set the positions
wall1.position.set(0,1.3,-0.4)            //BACK WALL
wall2.position.set(0,1.3,2.6)             //FRONT WALL
wall3.position.set(0,-0.2,1.1)            //BOTTOM WALL
wall4.position.set(0,2.8,1.1)             //TOP WALL
wall5.position.set(-1.5,1.3,1.1)          //LEFT WALL
wall6.position.set(1.5,1.3,1.1)           //RIGHT WALL

//scale the walls
wall1.scale.set(3,3,0.1)
wall2.scale.set(3,3,0.1)
wall3.scale.set(3,0.1,3)
wall4.scale.set(3,0,3)
wall5.scale.set(0,3,3)
wall6.scale.set(0,3,3)

//add ALL walls to the scene
scene.add(wall1)
scene.add(wall2)
scene.add(wall3)
scene.add(wall4)
scene.add(wall5)
scene.add(wall6)

/****************************LOADING OBJ MODELS FOR THE ROOM SCENE*********************************/

// Instantiate a loader
var loaderG = new THREE.GLTFLoader();

// called when loading is in progresses
onProgress = function(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}

// called when loading has errors
onError = function(error) {
    console.log('Error while loading model');
    console.log(error)

}

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/sofa/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene
        
        model.position.set(1,-0.3,1)
        model.rotation.y = Math.PI;
        model.scale.set(0.4,0.4,0.4)
        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/led_tv/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene
        
        model.position.set(-1,0.65,1)
        model.rotation.y = Math.PI / 2;
        model.scale.set(0.1,0.1,0.1)
        scene.add(model);
    },
    onProgress,
    onError);
// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/desk/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene
        
        model.position.set(-1,-0.15,1)
        model.rotation.y = Math.PI;
        model.scale.set(0.01,0.01,0.01)
        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/window/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene
        
        model.position.set(2,0.3,2)
        model.rotation.y = -Math.PI / 2;
        model.scale.set(0.04,0.025,0.03)
        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/indoor_plant/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene        
        model.position.set(-1.1,-0.15,-0.1)                     
        model.scale.set(0.2,0.2,0.2)

        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/indoor_plant/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene        
        model.position.set(-1.1,-0.15,2.2)                  
        model.scale.set(0.2,0.2,0.2)
        scene.add(model);
    },
    onProgress,
    onError);


// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/chandelier/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene        
        model.position.set(0,2,1)                      
        model.scale.set(0.0008,0.0008,0.0008)

        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/mona_lisa_painting/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene        
        model.position.set(1.5,2,1)
        model.rotation.y = -Math.PI / 2;
        model.scale.set(0.1,0.1,0.1)

        scene.add(model);
    },
    onProgress,
    onError);

// Load a glTF resource
loaderG.load(
    // resource URL 
    'models-gltf/art_painting/scene.gltf',
    // called when the resource is loaded
    function(gltf) {

        model = gltf.scene        
        model.position.set(-1.5,2,1)                    
        model.scale.set(0.015,0.015,0.015)
        
        scene.add(model);
    },
    onProgress,
    onError);

//function render() ---> to re-draw the renderer every time the screen/frame refreshes,
//to avoid the distortions of the objects on the screen
function render() {
    renderer.render(scene,camera)
    controls.update()
    requestAnimationFrame(render)
}
render()
