
import * as THREE from "./codes/three.module.js"
import { OrbitControls } from './codes/OrbitControls.js';
import { GLTFLoader } from './codes/GLTFLoader.js'
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import Ammo from './codes/ammo.js'
import {standBy} from './standBy.js'
import {running} from './running.js'
import { openObj } from "./openObj.js"
import {FontLoader} from "./codes/FontLoader.js"
import { TextGeometry } from "./codes/TextGeometry.js";


const scene = new THREE.Scene()
const scene1 = new THREE.Scene()
const scene2 = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
const camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
var clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer()
//quarter size of window -> devide by 2
renderer.setSize( window.innerWidth , window.innerHeight)
//important --> adapt the render pixels to our device
renderer.setPixelRatio(devicePixelRatio)
//add window to the htlm file doc
document.body.appendChild( renderer.domElement )
scene.background = new THREE.Color("#72c9da")
scene1.background = new THREE.Color("#72c9da")
scene2.background = new THREE.Color("#72c9da")

/*
//green to cube
const grassTexLoader = new THREE.TextureLoader().load("./textures/grass.jpg")
const geometry = new THREE.BoxGeometry( 100, 0.1, 100 )
const material = new THREE.MeshStandardMaterial( {color: 0x008f39 ,map:grassTexLoader})
const cube = new THREE.Mesh( geometry, material )
scene.add( cube )


const planeGeometry = new THREE.PlaneGeometry( 5, 5,10,10 );
const planeMaterial = new THREE.MeshPhongMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
//plane.position.set(10,10,10)
scene.add( plane );
*/

const fontLoader = new FontLoader()
var startTime = 0

//scene 1 "start game"
fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("Character\nmoving and turn\n right and left",{
        font: font,
        size: 20,
        height: 2.
    })
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = 90
    textMesh.position.y = 20
    textMesh.position.z = 0
    
    scene1.add(textMesh)
})

fontLoader.load('./codes/fonts/shift.json', function(font){
    const geometry2 = new TextGeometry("c",{
        font: font,
        size: 20,
        height: 2.
    })
    const arrows = new THREE.Mesh(geometry2, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    arrows.position.x = 150
    arrows.position.y = -100
    arrows.position.z = 0
    
    scene1.add(arrows)
})
fontLoader.load('./codes/fonts/shift.json', function(font){
    const geometry2 = new TextGeometry("A",{
        font: font,
        size: 20,
        height: 2.
    })
    const arrows = new THREE.Mesh(geometry2, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    arrows.position.x = 120
    arrows.position.y = -130
    arrows.position.z = 0
    
    scene1.add(arrows)
})

fontLoader.load('./codes/fonts/shift.json', function(font){
    const geometry2 = new TextGeometry("E",{
        font: font,
        size: 20,
        height: 2.
    })
    const arrows = new THREE.Mesh(geometry2, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    arrows.position.x = 180
    arrows.position.y = -130
    arrows.position.z = 0
    
    scene1.add(arrows)
})

fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("Press X to open \n chest and gate \nto win the game",{
        font: font,
        size: 20,
        height: 2.
    })
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = -100
    textMesh.position.y = 0
    textMesh.position.z = 0
    
    scene1.add(textMesh)
})

fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("moving the \n camera : \n drag mouse",{
        font: font,
        size: 20,
        height: 2.
    })
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = -250
    textMesh.position.y = 20
    textMesh.position.z = 0
    
    scene1.add(textMesh)
})
var textMesh
fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("Start Game \n   Waiting  ",{
        font: font,
        size: 20,
        height: 2.
    })
    textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = -50
    textMesh.position.y = 100
    textMesh.position.z = 0
    
    scene1.add(textMesh)
})
var plus
fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("plus",{
        font: font,
        size: 20,
        height: 2.
    })
    plus = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    plus.position.x = -210
    plus.position.y = -100
    plus.position.z = 0
    
    scene1.add(plus)
})


var iconMesh //mouse point
fontLoader.load('./codes/fonts/pointers.json', function(font){
    const geometry1 = new TextGeometry("h",{
        font: font,
        size: 20,
        height: 2.
    })
    iconMesh = new THREE.Mesh(geometry1, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    iconMesh.position.x = -160
    iconMesh.position.y = -100
    iconMesh.position.z = 0
    
    scene1.add(iconMesh)
})

var shift
fontLoader.load('./codes/fonts/shift.json', function(font){
    const geometry2 = new TextGeometry("K",{
        font: font,
        size: 20,
        height: 2.
    })
    shift = new THREE.Mesh(geometry2, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    shift.position.x = -250
    shift.position.y = -100
    shift.position.z = 0
    
    scene1.add(shift)
})

//scene 2 end game 

fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("You Won!",{
        font: font,
        size: 20,
        height: 2.
    })
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = -50
    textMesh.position.y = 0
    textMesh.position.z = 0
    
    scene2.add(textMesh)
})

fontLoader.load('./codes/fonts/Font.json', function(font){
    const geometry = new TextGeometry("Wait to Restart",{
        font: font,
        size: 20,
        height: 2.
    })
    const textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({color: 0xad4000}),
        new THREE.MeshPhongMaterial({color:0x5c2301})
    ])
    
    textMesh.position.x = -80
    textMesh.position.y = -50
    textMesh.position.z = 0
    
    scene2.add(textMesh)
})

camera.position.z =200   //50 ,200
camera.position.x =250   //60 ,250
camera.position.y =180     //50, 180

camera1.position.z =210 
camera1.position.x =0 
camera1.position.y =0   

camera2.position.z =210 
camera2.position.x =0 
camera2.position.y =0 



const pointLight1 = new THREE.PointLight(0xc4c4c4,1)
pointLight1.position.set(500,100,0)
scene.add(pointLight1)
scene1.add(pointLight1)


const pointLight2 = new THREE.PointLight(0xc4c4c4,1)
pointLight2.position.set(0,100,-500)
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xc4c4c4,1)
pointLight3.position.set(-500,300,0)
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight(0xc4c4c4, 1)
pointLight4.position.set(0,300,500)
scene.add(pointLight4)


const loader = new GLTFLoader();

var physicsUniverse
var tmpTransform = undefined;
var dispatcher
var overlappingPairCache
var solver
var rigidBody_List = [];
var collisionConfiguration
var ammoClone
var characterObject = null
var moveDirection = { left: 0, right: 0, forward: 0, back: 0 }
const STATE = { DISABLE_DEACTIVATION : 4 }
var xDir = 0
var zDir = 0
startAmmo()
function startAmmo(){
Ammo().then(function(Ammo){

    //Phisics World setup 
    collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    overlappingPairCache = new Ammo.btDbvtBroadphase();
    solver = new Ammo.btSequentialImpulseConstraintSolver();
    ammoClone = Ammo
    physicsUniverse = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    physicsUniverse.setGravity(new Ammo.btVector3(0,-10, 0));

    tmpTransform = new Ammo.btTransform();

    animate()
    
    //console.log(" Ammo start")
    
   
});
}
/*
var car
loader.load( './assets/cobraCar/source/car.glb', function ( glb ) {
    console.log(glb)
    car=glb.scene
    car.position.set(20,0,5)
    scene.add(car)
},function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, undefined, function ( error ) {
	console.error( error );
} )
*/



                //25 is the ID begins
var character  //below represents different points of same body part
var torso //Dummy_Root_130，"Bip001_129" , "Bip001-Pelvis_128"
var spine // 腰以上 往上,Bip001-Spine_103， Bip001-Spine1_102 , Bip001-Spine2_88
var Neck // collo， Bip001-Neck_29
var head //Bip001-Head_28
var hair //cappelli front, behind, lef and right， Hair_F_01_1
         //, Hair_L_01_4, Hair_L_02_3,Hair_L_03_2, Hair_R_01_8, Hair_R_02_7
         //Hair_R_03_6, Hair_B_01_14, Hair_B_02_13, Hair_B_03_12, Hair_B_04_11,
         //Hair_B_05_10, Hair_B_06_9 id:from 85 to 89
var lip  //Lip_R_01_16, Lip_L_02_17，Lip_R_02_19
var bone //下巴颏 ，Jaw_Bone_01_18
var forehead //额头 Forehead_M_01_20， Forehead_01_21
var Eyeild  //眼角 ，Eyeild_L_Dn_01_23，Eyeild_R_Dn_01_22，Eyeild_R_Up_01_25，
            //Eyeild_L_Up_01_26
var eye     //眼睛 Eye_R_01_24，Eye_L_01_27
var LBreast   //胸 Breast_R_01_30，Breast_L_01_31
var RBreast 
//left hand
var LClavicle  //肩膀， Bip001-L-Clavicle_66
var LUpperArm  //手臂 ，Bip001-L-UpperArm_65
var LForeArm   //小手臂， Bip001-L-Forearm_56
var LHand      //手腕， Bip001-L-Hand_52
var LTumbFinger    //Bip001-L-Finger0_33，Bip001-L-Finger01_32，Bip001-L-Finger1_35
var LTumbCapeFinger
var LSFinger       //Bip001-L-Finger11_34，Bip001-L-Finger2_37，Bip001-L-Finger21_36
var LSCapeFinger
var LSThreeFinger
var LSThreeCapeFinger 

var umbrella  //Bip001-Prop1_51 ， Umbrella_Rib_04_38，Umbrella_Rib_11_39
              //Umbrella_Rib_05_40，Umbrella_Rib_12_41， Umbrella_Rib_10_42
              //Umbrella_Rib_03_43， Umbrella_Rib_07_44， Umbrella_Rib_02_45
              //Umbrella_Rib_09_46， Umbrella_Rib_06_47，Umbrella_Rib_01_48
              //Umbrella_Rib_08_49

var umbStarBottom //星星底座，Umbrella_Button_01_50， 
var manica     //Sleeve_L_C_01_55，Sleeve_L_C_02_54，Sleeve_L_C_03_53，Sleeve_L_B_01_61
               //Sleeve_L_B_02_60，Sleeve_L_B_03_59，Sleeve_L_B_04_58，Sleeve_L_B_05_57
               //Sleeve_L_F_01_64，Sleeve_L_F_02_63，Sleeve_L_F_03_62  (N) 
               //id: 152
//right hand
var RClavicle  //Bip001-R-Clavicle_87
var RUpperArm  //Bip001-R-UpperArm_86
var RForeArm   //Bip001-R-Forearm_77
var RHand      //Bip001-R-Hand_73

var RTumbFinger      //Bip001-R-Finger0_68, Bip001-R-Finger01_67, Bip001-R-Finger1_70,
var RTumbCapeFinger   //Bip001-R-Finger11_69, Bip001-R-Finger2_72, Bip001-R-Finger21_71
var RSFinger       
var RSCapeFinger
var RSThreeFinger
var RSThreeCapeFinger 


var Rmanica    //Sleeve_R_C_01_76, Sleeve_R_C_02_75, Sleeve_R_C_03_74
               //Sleeve_R_B_01_82, Sleeve_R_B_02_81, Sleeve_R_B_03_80
               //Sleeve_R_B_04_79, Sleeve_R_B_05_78, Sleeve_R_F_01_85
               //Sleeve_R_F_02_84, Sleeve_R_F_03_83   (N)
var acc        //Acc_R_01_91, Acc_R_02_90, Acc_R_03_89 , Acc_L_01_94, Acc_L_02_93
               //Acc_L_03_92, Acc_C_02_95
var LUpperRibbon     //Ribbon_C_01_101, Ribbon_L_02_97, Ribbon_R_02_98, Ribbon_L_01_99
var LSecondRibbon   //Ribbon_R_01_100, (N) 
var LThirdRibbon     //id: L: 104, 114, 128, 154, R: 107, 118, 134, 159
var LLowerRibbon

var RUpperRibbon    // R: 107, 118, 134, 159
var RSecondRibbon
var RThirdRibbon
var RLowerRibbon

var RUpperLeg     //大腿, Bip001-R-Thigh_114  (x)
var RLowerLeg     //小腿，Bip001-R-Calf_105 
var RFoot         //Bip001-R-Foot_104
var RSkirt        //Skirt_R_02_108, Skirt_R_03_107
                  //Skirt_R_04_106, Skirt_R_03_107  (N) 
var RSkirtA       //裙子，Skirt_RB_01_113, Skirt_RB_02_112 (S),
var RLowerSkirt   //Skirt_RB_03_111, Skirt_RB_04_110 (N)
                  // id: 42, 54  =111,110
var LUpperLeg     //Bip001-L-Thigh_127
var LLowerLeg     //Bip001-L-Calf_116
var LFoot         //Bip001-L-Foot_115
var LSkirt        //Skirt_F_01_118, Skirt_F_02_117, Skirt_L_01_122
                  //Skirt_L_02_121, Skirt_L_03_120, Skirt_L_04_119
var LSkirtA       //Skirt_LB_01_126, Skirt_LB_02_125 (S),
var LLowerSkirt   // Skirt_LB_03_124, Skirt_LB_04_123 (N)
                  //id: 46, 58 = 124, 123
                  //165 is the end of IDs

const standByMode = new standBy();
const runningMode = new running();
const openObjMode = new openObj();
var moving = true
var characterBB
var initialPosX
var initialPosY
var initialPosZ
loader.load( './assets/haru_game_character/scene.gltf', function ( gltf , Ammo = ammoClone) {

    
    

    character=gltf.scene
    characterObject = character
    character.scale.set(20,20,20)
    character.position.set(50,15,0) //x:lunghezza, y: altezza, z:larghezza
    
 


    var pos = {x:character.position.x , y:character.position.y,z:character.position.z }
    var scale={x:20 , y:20 , z:20 }
    //var quat = {x:character.quaternion.x , y:character.quaternion.y , 
    //    z:character.quaternion.z , w:character.quaternion.w}
    var rotation = {x:character.rotation.x , y:character.rotation.y , 
        z:character.rotation.z}
    var mass = 1
  
    //console.log("character: ")
    //console.log(character)
    
  
    /*
    console.log("rotation: "+rotation.x+" "+ rotation.y +" " +rotation.z)
    console.log("scale : "+scale.x+" "+ scale.y +" " +scale.z)
    console.log("position : "+pos.x +" "+pos.y+" "+pos.z) //z: altezza, y: larghezza, x: lunghezza
    //console.log("quaternion: " +quat.x +" "+ quat.y+" "+quat.z+" "+quat.w)
    */
   
    
    //character.translateX(200)
    //character.translateZ(100)
    

    //ribbon = character.getObjectById(105)
    
    
    torso = character.getObjectByName("Bip001_129")
    initialPosX = torso.position.x
    initialPosY = torso.position.y
    initialPosZ = torso.position.z
    //console.log("torso:")
    //console.log(torso)
    
    head = character.getObjectByName("Bip001-Head_28")
   
    LClavicle = character.getObjectByName("Bip001-L-Clavicle_66") //肩膀
    RClavicle = character.getObjectByName("Bip001-R-Clavicle_87")
    LUpperArm = character.getObjectByName("Bip001-L-UpperArm_65")
    LUpperArm.rotateZ(0.3)
    RUpperArm = character.getObjectByName("Bip001-R-UpperArm_86")
    RUpperArm.rotateZ(-0.3)
    LForeArm = character.getObjectByName("Bip001-L-Forearm_56")
    RForeArm = character.getObjectByName("Bip001-R-Forearm_77")

    LTumbFinger = character.getObjectByName("Bip001-L-Finger0_33")
    LTumbCapeFinger = character.getObjectByName("Bip001-L-Finger01_32")
    LSFinger = character.getObjectByName("Bip001-L-Finger1_35")
    LSCapeFinger = character.getObjectByName("Bip001-L-Finger11_34")
    LSThreeFinger = character.getObjectByName("Bip001-L-Finger2_37")
    LSThreeCapeFinger = character.getObjectByName("Bip001-L-Finger21_36")
    //LSThreeFinger.rotateX(1)

    RTumbFinger = character.getObjectByName("Bip001-R-Finger0_68")    //Bip001-R-Finger0_68, Bip001-R-Finger01_67, Bip001-R-Finger1_70,
    RTumbCapeFinger = character.getObjectByName("Bip001-R-Finger01_67")   //Bip001-R-Finger11_69, Bip001-R-Finger2_72, Bip001-R-Finger21_71
    RSFinger = character.getObjectByName("Bip001-R-Finger1_70")       
    RSCapeFinger = character.getObjectByName("Bip001-R-Finger11_69") 
    RSThreeFinger = character.getObjectByName("Bip001-R-Finger2_72") 
    RSThreeCapeFinger = character.getObjectByName("Bip001-R-Finger21_71") 
    
    
    
    LUpperRibbon = character.getObjectById(120)  //L: 104, 114, 128, 154
    LUpperRibbon.scale.set(0.01, 0.01, 0.01)
    /*LSecondRibbon = character.getObjectById(114)
    LSecondRibbon.scale.set(0.01, 0.01, 0.01)
    LThirdRibbon = character.getObjectById(128)
    LThirdRibbon.scale.set(0.01, 0.01, 0.01)
    LLowerRibbon = character.getObjectById(154)
    LLowerRibbon.scale.set(0.01, 0.01, 0.01)
   */
   
    
    RUpperRibbon = character.getObjectById(123)  // R: 107, 118, 134, 159
    RUpperRibbon.scale.set(0.01, 0.01, 0.01)
    /*RSecondRibbon = character.getObjectById(118)
    RSecondRibbon.scale.set(0.01, 0.01, 0.01)
    RThirdRibbon = character.getObjectById(134)
    RThirdRibbon.scale.set(0.01, 0.01, 0.01)
    RLowerRibbon = character.getObjectById(159)
    RLowerRibbon.scale.set(0.01, 0.01, 0.01)*/
    


    umbrella = character.getObjectByName("Bip001-Prop1_51")
    //umbrella.rotateZ(-0.4)
    //umbrella.translateY(-30)
    LBreast = character.getObjectByName("Breast_L_01_31")
    RBreast = character.getObjectByName("Breast_R_01_30")
    
    characterStandBy()
    
    
    RUpperLeg = character.getObjectByName("Bip001-R-Thigh_114")
    LUpperLeg = character.getObjectByName("Bip001-L-Thigh_127")
    RLowerLeg = character.getObjectByName("Bip001-R-Calf_105")
    LLowerLeg = character.getObjectByName("Bip001-L-Calf_116")
    RFoot = character.getObjectByName("Bip001-R-Foot_104")
    LFoot = character.getObjectByName("Bip001-L-Foot_115")
    RSkirtA = character.getObjectByName("Skirt_RB_01_113")
    RLowerSkirt = character.getObjectByName("Skirt_RB_02_112")
    LSkirtA = character.getObjectByName("Skirt_LB_01_126")
    LLowerSkirt = character.getObjectByName("Skirt_LB_02_125")

    //bounding box 3
    
    
    characterBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    characterBB.setFromObject(character)
    //console.log("characterBB: ")
    //console.log(characterBB)
   
    scene.add(character)

    
    //physics in ammojs
    var transform = new Ammo.btTransform()
    transform.setIdentity()
    transform.setOrigin(new Ammo.btVector3(pos.x ,pos.y, pos.z))
    //transform.setRotation(new ammoClone.btQuaternion(quat.x ,quat.y, quat.z, quat.w))


    var motionState = new Ammo.btDefaultMotionState(transform)

    var localInertia = new Ammo.btVector3(0,0,0)

    

    var shape = new Ammo.btBoxShape(new Ammo.btVector3(scale.x *0.5 , scale.y * 0.5 ,scale.z * 0.5))
    shape.setMargin(0.05)
    shape.calculateLocalInertia(mass, localInertia)

    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia)
    var rBody = new Ammo.btRigidBody(rigidBodyInfo)
    rBody.setFriction(4);
    rBody.setRollingFriction(10);
    rBody.setActivationState( STATE.DISABLE_DEACTIVATION );

    physicsUniverse.addRigidBody(rBody)
    character.userData.physicsBody = rBody
    rigidBody_List.push(character)
    

},function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, undefined, function ( error ) {
	console.error( error );
} )



var prova
var leftGate //Object_6 ,Left_1  //entire gate: GLTF_SceneRootNode, gate, outeGate
var rightGate //Object_4, Right_0
var wall6
var ground
var key
var chest11
var chest3
var chest7
var chest9
var chest3Opened = false
var chest7Opened = false
var chest9Opened = false
var chest11Opened = false
var win = false
var haveKey = false
var thereIsKey = false
var keyX 
var keyY 
var keyZ 

loader.load( './assets/model/model.gltf', function ( gltf1 , Ammo =ammoClone ) {

    var model = gltf1.scene

  

    var quat ={x:0 , y: 0, z:0 , w:1}
    var mass = 0

    gltf1.scene.scale.set(10,10,10)
    gltf1.scene.position.set(0,0,0)
    

    leftGate = model.getObjectByName("leftGate")
    ground = model.getObjectByName("Cube")
    wall6 = model.getObjectByName("wall6")
    //bounding box
    key = model.getObjectByName("key")
    key.rotateZ(30)
    key.translateX(1.5)
    keyX = key.scale.x
    keyY = key.scale.y
    keyZ = key.scale.z
    key.scale.set(0,0,0)
    chest11 = model.getObjectByName("top")
    chest3 = model.getObjectByName("top1")
    chest7 = model.getObjectByName("top2")
    chest9 = model.getObjectByName("top3")
    //chest9.rotateY(-0.7)
    
    
    
   // wall6.translateZ(20)

    var rotation = {x: ground.rotation.x, y:ground.rotation.y,
        z: ground.rotation.z }
    var scale = {x: ground.scale.x, y:ground.scale.y,
        z: ground.scale.z}
    var pos = {x: ground.position.x,
        y:ground.position.y,
        z:ground.position.z}
    //var quat = {x: wall6.quaternion.x, y:wall6.quaternion.y,
      //  z: wall6.quaternion.z, w:wall6.quaternion.w}
/*
    console.log("rotation: "+rotation.x+" "+ rotation.y +" " +rotation.z)
    console.log("scale : "+scale.x+" "+ scale.y +" " +scale.z)
    console.log("position : "+pos.x +" "+pos.y+" "+pos.z) //z: altezza, y: larghezza, x: lunghezza
    //console.log("quaternion: " +quat.x +" "+ quat.y+" "+quat.z+" "+quat.w)
*/
    scene.add(gltf1.scene)
        
    //physics in ammojs
    var transform = new Ammo.btTransform()
    transform.setIdentity()
    transform.setOrigin(new Ammo.btVector3(pos.x ,pos.y, pos.z))
    //transform.setRotation(new ammoClone.btQuaternion(quat.x ,quat.y, quat.z, quat.w))

    var motionState = new Ammo.btDefaultMotionState(transform)

    var localInertia = new Ammo.btVector3(0,0,0)

    var shape = new Ammo.btBoxShape(new Ammo.btVector3(scale.x *10, scale.y -1.5  ,scale.z * 15))
    shape.setMargin(0.05)
    shape.calculateLocalInertia(mass, localInertia)

    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia)
    var rBody = new Ammo.btRigidBody(rigidBodyInfo)

    rBody.setFriction(4);
    rBody.setRollingFriction(10);
    

    physicsUniverse.addRigidBody(rBody)
    

},function(xh){
    console.log((xh.loaded/xh.total * 100) + "% loaded")
}, undefined, function ( error ) {      
	console.error( error );
} )

const ambientLight = new THREE.AmbientLight(0xffffff,2)
//light from top down
scene.add(ambientLight)

const intensity = 5
const distance = 50
const angle = Math.PI * 0.05
const penumbra = 0.1
const decay = 0.5;
var spotLight = new THREE.SpotLight(0xffffff, intensity, distance, angle, penumbra, decay);
spotLight.position.set(0, 0, 0);
scene.add(spotLight);


const directionLight =new THREE.DirectionalLight(0xffffff,0.2)
directionLight.position.set(0,1,0)
directionLight.castShadow = true
scene.add(directionLight)
var arrowUpPressed = false
var start = true
var direction = "-z";
var posZ
var posY

document.addEventListener('keydown', (event) =>{

    console.log("key Command:"+ event.key)
    if(event.key == 'x'){
        posZ = torso.position.z
        posY = torso.position.y
        console.log("position Y: "+posY)
        console.log("position Z: "+posZ)
        console.log("position X: "+torso.position.x)
        if(!chest3Opened && posY > 300 && posY < 440 && posZ > -70 && posZ < 70 ){            //3
            openObjMode.openChest(chest3)
            chest3Opened = !chest3Opened
        }else if(!chest7Opened && posY > 870 && posY < 1065 && posZ > 680 && posZ < 875 ){    //7
            openObjMode.openChest(chest7)
            chest7Opened = !chest7Opened  
        }else if(!chest9Opened && posY > -999 && posY < -865 && posZ > 680 && posZ < 875){    //9
            openObjMode.openChest(chest9)
            chest9Opened = !chest9Opened
        }else if(!chest11Opened && posY > -1310 && posY < -1175 && posZ > -310 && posZ < -180){ //11
            openObjMode.openRightChest(chest11)
            thereIsKey = true
            chest11Opened = !chest11Opened
        }else if(thereIsKey && posY > -1248 && posY < -1166 && posZ > -200 && posZ < -54){
            haveKey = true
            thereIsKey = false
            key.scale.set(0,0,0)
        }else if(haveKey && !win && direction == "-z" && posY > -255 && posY < 130 && posZ < -730 ){
            win = true
            console.log("win: "+win)
        }
        
    }

    if(event.key == 'ArrowUp'){
        
        arrowUpPressed = true
        standByMode.setArrowPressed(true)
        runningMode.setArrowUpPressed(true)
        posZ = torso.position.z
        posY = torso.position.y

        runningMode.setTorsoPosZ(posZ)
        runningMode.setTorsoPosY(posY)
        
        if(start && !win){ //start stay for standBy
            start =false
            if(posZ > -730 && direction == "-z"){ 
                if(posY > 133 && posY < 237 && posZ > -610 && posZ < -175){}      //1
                else if(posY > -52 && posY < 115 && posZ > 258 && posZ < 440){}     //2
                else if(posY > 318 && posY < 422 && posZ > -52 && posZ < 72){}      //3
                else if(posY > 330 && posY < 797 && posZ > -300 && posZ < -174 ){}  //4
                else if(posY > 448 && posY < 550 && posZ > 820 && posZ < 945 ){}    //5
                else if(posY > 632 && posY < 735 && posZ > 510 && posZ < 945 ){}    //6
                else if(posY > 883 && posY < 1049 && posZ > 694 && posZ < 882 ){}   //7
                else if(posY > -985 && posY < -879 && posZ > -175 && posZ < 194){}  //8
                else if(posY > -980 && posY < -878 && posZ > 756 && posZ < 818){}   //9
                else if(posY > -1483 && posY < -1316 && posZ > 445 && posZ < 630){} //10
                else if(posY > -1295 && posY < -1190 && posZ > -300 && posZ < -178){}//11
                else if(posY > -1418 && posY < -1252 && posZ > -667 && posZ < -482){}//12
                else if (thereIsKey && posY > -1228 && posY < -1186 && posZ > -180 && posZ < -54){} //13
                else{runningMode.move(torso) 
                    //console.log("1")
                }
            }else if(posZ < 1099 && direction == "z"){
                if(posY > 133 && posY < 237 && posZ > -631 && posZ < -195){}      //1
                else if(posY > -52 && posY < 115 && posZ > 238 && posZ < 420){}     //2
                else if(posY > 318 && posY < 422 && posZ > -72 && posZ < 52){}      //3
                else if(posY > 330 && posY < 797 && posZ > -318 && posZ < -194 ){}  //4
                else if(posY > 448 && posY < 550 && posZ > 800 && posZ < 925 ){}    //5
                else if(posY > 632 && posY < 735 && posZ > 490 && posZ < 925 ){}    //6
                else if(posY > 883 && posY < 1049 && posZ > 674 && posZ < 862 ){}   //7
                else if(posY > -985 && posY < -879 && posZ > -195 && posZ < 174){}  //8
                else if(posY > -980 && posY < -878 && posZ > 736 && posZ < 800){}   //9
                else if(posY > -1483 && posY < -1316 && posZ > 425 && posZ < 610){} //10
                else if(posY > -1295 && posY < -1190 && posZ > -318 && posZ < -198){}//11
                else if(posY > -1418 && posY < -1252 && posZ > -687 && posZ < -500){}//12
                else if (thereIsKey && posY > -1228 && posY < -1186 && posZ > -200 && posZ < -74){} //13
                else{runningMode.move(torso)
                    //console.log("2")
                }
            }else if(posY > -1654 && direction == "-y") {
                if(posY > 133 && posY < 257 && posZ > -610 && posZ < -195){}      //1
                else if(posY > -52 && posY < 135 && posZ > 258 && posZ < 420){}     //2
                else if(posY > 318 && posY < 442 && posZ > -52 && posZ < 52){}      //3
                else if(posY > 330 && posY < 817 && posZ > -300 && posZ < -194 ){}  //4
                else if(posY > 448 && posY < 571 && posZ > 820 && posZ < 925 ){}    //5
                else if(posY > 632 && posY < 755 && posZ > 510 && posZ < 925 ){}    //6
                else if(posY > 883 && posY < 1069 && posZ > 694 && posZ < 862 ){}   //7
                else if(posY > -985 && posY < -859 && posZ > -175 && posZ < 174){}  //8
                else if(posY > -980 && posY < -858 && posZ > 756 && posZ < 800){}   //9
                else if(posY > -1483 && posY < -1296 && posZ > 445 && posZ < 610){} //10
                else if(posY > -1295 && posY < -1170 && posZ > -300 && posZ < -198){}//11
                else if(posY > -1418 && posY < -1232 && posZ > -667 && posZ < -500){}//12
                else if (thereIsKey && posY > -1228 && posY < -1166 && posZ > -180 && posZ < -74){} //13
                else{runningMode.move(torso)
                    //console.log("3")
                }
                
            }else if (posY < 1120 && direction == "y"){
                if(posY > 113 && posY < 237 && posZ > -610 && posZ < -195){}        //1
                else if(posY > -72 && posY < 115 && posZ > 258 && posZ < 420){}     //2
                else if(posY > 298 && posY < 422 && posZ > -52 && posZ < 52){}      //3
                else if(posY > 310 && posY < 797 && posZ > -300 && posZ < -194 ){}  //4
                else if(posY > 428 && posY < 550 && posZ > 820 && posZ < 925 ){}    //5
                else if(posY > 612 && posY < 735 && posZ > 510 && posZ < 925 ){}    //6
                else if(posY > 863 && posY < 1049 && posZ > 694 && posZ < 862 ){}   //7
                else if(posY > -1005 && posY < -879 && posZ > -175 && posZ < 174){}  //8
                else if(posY > -1000 && posY < -878 && posZ > 756 && posZ < 800){}   //9
                else if(posY > -1503 && posY < -1316 && posZ > 445 && posZ < 610){} //10
                else if(posY > -1315 && posY < -1190 && posZ > -300 && posZ < -198){}//11
                else if(posY > -1438 && posY < -1252 && posZ > -667 && posZ < -500){}//12
                else if (thereIsKey && posY > -1248 && posY < -1186 && posZ > -180 && posZ < -74){} //13
                else{runningMode.move(torso)
                    //console.log("4")
                }
            }
            characterRunning()
        }
       
    }
    if(event.key == "ArrowLeft"){

        console.log("event key : "+event.key)
        
        if(start){ //start stay for standBy
            start =false
            if(direction== "-z"){
                direction= "y"
                runningMode.setDirection("y")
                console.log("direction: "+direction)
            }else if (direction == "y"){
                direction= "z"
                runningMode.setDirection("z")
                console.log("direction: "+direction)
            }else if (direction == "z"){
                direction= "-y"
                runningMode.setDirection("-y")
                console.log("direction: "+direction)
            }else if(direction == "-y"){
                direction= "-z"
                runningMode.setDirection("-z")
                console.log("direction: "+direction)
            }
            
            //characterRunning()
            
            runningMode.moveLeft(torso)
            
           
            
        }
       
    }

    if(event.key == "ArrowRight"){
        
        console.log("event key : "+event.key)
        
        if(start){ //start stay for standBy
            if(direction == "-z"){
                direction= "-y"
                runningMode.setDirection("-y")
                console.log("direction: "+direction)
            }else if(direction == "-y"){
                direction= "z"
                runningMode.setDirection("z")
                console.log("direction: "+direction)
            }else if(direction == "z"){
                direction = "y"
                runningMode.setDirection("y")
                console.log("direction: "+direction)
            }else if(direction == "y"){
                direction = "-z"
                runningMode.setDirection("-z")
                console.log("direction: "+direction)
            }
            console.log(" entrato to start: "+ start)
            //characterRunning()
            start =false
            runningMode.moveRight(torso)
            
            
            
        }
       
    }

}, false)

document.addEventListener('keyup', (event) =>{
    
    if(event.key == 'ArrowUp'){
        console.log("up")
        if(arrowUpPressed){
            arrowUpPressed =false
            runningMode.setArrowUpPressed(false)   
        }
    }
    
}, false)




class finishes{
    

    setStandBy(){
        characterStandBy()
    }
    setX(s){
        xDir = s
    }
    setZ(s){
        zDir=s
    }
    
    setMoving(s){
        moving=s
    }
    getRuning(){
        return arrowUpPressed
    }
    setStart(s){
        start = s
    }
    setPhysicsUniverse(x,y,z){
        physicsUniverse.setGravity(new ammoClone.btVector3(x,y,z));
    }

    setKey(){
        key.scale.set(keyX,keyY,keyZ)
    }
}
export { finishes };

function characterStandBy(){

    standByMode.removeUmbrella(umbrella)
    
    
    standByMode.breartBreath(LBreast,false)
    standByMode.breartBreath(RBreast,false)
    
    standByMode.Clavicle(LClavicle,false)
    standByMode.Clavicle(RClavicle,false)
    standByMode.LowerArm(LForeArm,false)
    standByMode.LowerArm(RForeArm,false)

    /*
    standByMode.upRibbon(LUpperRibbon,false)
    standByMode.downRibbon(LSecondRibbon,false)
    standByMode.upRibbon(LThirdRibbon,false)
    standByMode.downRibbon(LLowerRibbon,false)
    standByMode.upRibbon(RUpperRibbon,false)
    standByMode.downRibbon(RSecondRibbon,false)
    standByMode.upRibbon(RThirdRibbon,false)
    standByMode.downRibbon(RLowerRibbon,false)
    */
    
}


function characterRunning(){
    runningMode.rightUpperLeg(RUpperLeg , false)
    runningMode.leftUpperLeg(LUpperLeg, false)
    runningMode.rightmediumLeg(RLowerLeg, false)
    runningMode.leftMediumLeg(LLowerLeg, false)
    //runningMode.rightFoot(RFoot, false)
    //runningMode.leftFoot(LFoot, false)
    runningMode.rightSkirt(RSkirtA, false)
    runningMode.leftSkirt(LSkirtA, false)
    runningMode.rightLowerSkirt(RLowerSkirt, false)
    runningMode.leftLowerSkirt(LLowerSkirt, false)
    
    /*
    runningMode.rightUpperRibbon(RUpperRibbon,false)
    runningMode.Ribbon(RSecondRibbon,false)
    runningMode.Ribbon(RThirdRibbon,false)
    runningMode.Ribbon(RLowerRibbon,false)
    runningMode.leftUpperRibbon(LUpperRibbon,false)
    runningMode.Ribbon(LSecondRibbon,false)
    runningMode.Ribbon(LThirdRibbon,false)
    runningMode.Ribbon(LLowerRibbon,false)*/

    runningMode.rightClavicle(RClavicle,false)
    runningMode.leftClavicle(LClavicle,false)
    runningMode.rightUpperArm(RUpperArm, false)
    runningMode.leftUpperArm(LUpperArm, false)
    //runningMode.umbrella(umbrella, false)
    runningMode.rightForeArm(RForeArm, false)
    runningMode.leftForeArm(LForeArm, false)
    //runningMode.umbrellaLA(umbrella, false)
    //runningMode.umbrellaCAZZO(umbrella, false)
    runningMode.fingers(RTumbFinger)
    runningMode.fingers(RTumbCapeFinger)
    runningMode.fingers(RSFinger)
    runningMode.fingers(RSCapeFinger)
    runningMode.fingers(RSThreeFinger)
    runningMode.fingers(RSThreeCapeFinger)
    runningMode.fingers(LTumbFinger)
    runningMode.fingers(LTumbCapeFinger)
    runningMode.fingers(LSFinger)
    runningMode.fingers(LSCapeFinger)
    runningMode.fingers(LSThreeFinger)
    runningMode.fingers(LSThreeCapeFinger)
}

function animate() {
    var deltatime= clock.getDelta();

    TWEEN.update()
    
    if(physicsUniverse){
     updatePhysics(deltatime)}
    /*
    if(torso){
        console.log("x: "+torso.position.x)
        console.log("y: "+torso.position.y)
        console.log("z: "+torso.position.z)
    }*/
    
    if(startTime<500){
        startTime +=1
        renderer.render( scene1 , camera1)
    }else if (win){
        if(startTime > 800&& startTime < 1000){        
            renderer.render( scene2 , camera2)
            startTime +=1
        }else if(startTime == 1000 ){
            startTime = 0
            win = false
            haveKey = false
            if(chest3Opened){
                openObjMode.closeChest(chest3)
                chest3Opened = false
            }
            if(chest7Opened){
                openObjMode.closeChest(chest7)
                chest7Opened = false
            }
            if(chest9Opened){
                openObjMode.closeChest(chest9)
                chest9Opened = false
            }
            if(chest11Opened){
                openObjMode.closeChest(chest11)
                chest11Opened = false
            }
            console.log("restart")
            camera.position.z =200   //50 ,200
            camera.position.x =250   //60 ,250
            camera.position.y =180     //50, 180
            torso.position.set(initialPosX, initialPosY, initialPosZ)

        }else{
            startTime +=1
        }
    }else{
        renderer.render( scene, camera )
    }
	
    requestAnimationFrame( animate )
    
}



function updatePhysics(delta){
    physicsUniverse.stepSimulation(delta, 10)
    //if(moving){
    for(var i = 0; i<rigidBody_List.length; i++){
        var threeObj = rigidBody_List[i]
        var ammoObj = threeObj.userData.physicsBody
        var ms = ammoObj.getMotionState()
        if(ms){
            ms.getWorldTransform(tmpTransform)
            var pos = tmpTransform.getOrigin()
            threeObj.position.set(pos.x(), pos.y(), pos.z())
        }
    //}
    }   

}

//control the object with mouse
const controls = new OrbitControls( camera, renderer.domElement )
//const controls1 = new OrbitControls( camera1, renderer.domElement )
//const controls2 = new OrbitControls( camera2, renderer.domElement )
//console.log(scene)

function loaderManager(){

    const manager = new THREE.LoadingManager();
    manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

	    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

    };

    manager.onLoad = function ( ) {

	    console.log( 'Loading complete!');

    };


    manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

	    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

    };

    manager.onError = function ( url ) {

	    console.log( 'There was an error loading ' + url );

    };
}


