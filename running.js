import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import { SkeletonHelper } from './codes/three.module.js';
import {finishes} from './main.js'
import {standBy} from './standBy.js'


var arrowUpPressed 
var posZ
var posY
var direction ="-z"

class running{

    setArrowUpPressed(s){
        arrowUpPressed = s
    }
    setTorsoPosY(s){
        posY = s
    }
    setTorsoPosZ(s){
        posZ =s
    }
    setDirection(s){
        direction = s
    }

    move(parameter){
        const move = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 1, y:0, z:0}, 1000)  

        const contMove= new TWEEN.Tween({x: 0}) 
        .to({x: 1,  y:0, z:0 }, 1000) 

        const moveRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 1, y:0, z:0}, 1000)

        
        const update = function(object =(x), elapsed ){
            parameter.translateY(object.x)
        }

        move.onUpdate(update)
        contMove.onUpdate(update)
        moveRestart.onUpdate(update)
        
        move.chain(contMove)
        moveRestart.chain(contMove)
       
        console.log("running direction: "+direction)
        contMove.onComplete(function() {
            if(arrowUpPressed && posZ > -730 && direction == "-z"){
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
                else{
                moveRestart.start()}
            }else if (arrowUpPressed && posZ < 1099 && direction == "z"){
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
                else{
                moveRestart.start()}
            }else if(arrowUpPressed && posY > -1654 && direction == "-y"  ){
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
                else{
                moveRestart.start()}
            }else if(arrowUpPressed && posY < 1120 && direction == "y"){
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
                else{
                moveRestart.start()}
            }
        });
        move.start()

    }

    moveLeft(parameter){
        const startEnd = new finishes();

        const moveLeft = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: Math.PI / 2, y:0, z:0}, 0.001)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX( object.x )
        }

        moveLeft.onUpdate(update)
       
        moveLeft.onComplete(function() {
            setTimeout(() => { startEnd.setStart(true)},150);
            
        });
        
        moveLeft.start()

    }

    moveRight(parameter){
        const startEnd = new finishes();
        const moveRight = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -Math.PI / 2, y:0, z:0}, 0.001)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
        }

        moveRight.onUpdate(update)
       
        moveRight.onComplete(function() {
            setTimeout(() => {startEnd.setStart(true) }, 150);
            
        });
        moveRight.start()
    }

    rightClavicle(parameter,pressed){


        const RClavicle = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.008, y:0, z:0}, 1000)  

        const RClavicleBack= new TWEEN.Tween({x: 0}) 
        .to({x: -0.016,  y:0, z:0 }, 1000)  

        const RClavicleRestart= new TWEEN.Tween({x: 0}) 
        .to({x: 0.016,  y:0, z:0 }, 1000) 

        const RClavicleBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0}) //Subtraction between RClavicle & RClavicleBack
        .to({x: 0.008, y:0, z:0}, 1000)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
        }

        RClavicle.onUpdate(update)
        RClavicleBack.onUpdate(update)
        RClavicleRestart.onUpdate(update)
        RClavicleBackInitialPos.onUpdate(update)

        RClavicle.chain(RClavicleBack)
        //RClavicleBack.chain(RClavicleRestart)
        RClavicleRestart.chain(RClavicleBack)

        RClavicleBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => {RClavicleRestart.start() }, 150);
                
            }else{
                setTimeout(() => { RClavicleBackInitialPos.start()}, 150);
                
                
                  //send back that arrowUpPressed is not pressed 
            }
        });
     
        RClavicle.start()
    
    }

    leftClavicle(parameter,pressed){

        const LClavicle = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.008, y:0, z:0}, 1000)  

        const LClavicleBack= new TWEEN.Tween({x: 0}) 
        .to({x: 0.016,  y:0, z:0 }, 1000)  

        const LClavicleRestart= new TWEEN.Tween({x: 0}) 
        .to({x: -0.016,  y:0, z:0 }, 1000) 

        const LClavicleBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.008, y:0.01, z:0.01}, 1000)

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
            }

        LClavicle.onUpdate(update)
        LClavicleBack.onUpdate(update)
        LClavicleRestart.onUpdate(update)
        LClavicleBackInitialPos.onUpdate(update)

        LClavicle.chain(LClavicleBack)
        //LClavicleBack.chain(LClavicleRestart)
        LClavicleRestart.chain(LClavicleBack)

        LClavicleBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => { LClavicleRestart.start()}, 150);
                
            }else{
                setTimeout(() => { LClavicleBackInitialPos.start()}, 150);
                
            }
        });
        
        LClavicle.start()
    }

    rightUpperArm(parameter,pressed){
        const startEnd = new finishes();
        const standByMode = new standBy();
        
       
        //console.log("arrowUpPressed: " + arrowUpPressed)

        const RUpperArm = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.02, y:0.01, z:0.01}, 1000)  

        const RUpperArmBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.032,  y:-0.01, z:-0.01 }, 1000)  

        const RUpperArmRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.032,  y:-0.01, z:-0.01 }, 1000)  

        const RUpperArmBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.012, y:0.01, z:0.01}, 1000)

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
        }

        RUpperArm.onUpdate(update)
        RUpperArmBack.onUpdate(update)
        RUpperArmRestart.onUpdate(update)
        RUpperArmBackInitialPos.onUpdate(update)

        RUpperArm.chain(RUpperArmBack)
        //RUpperArmBack.chain(RUpperArmRestart) //not need
        RUpperArmRestart.chain(RUpperArmBack)
        
        
        RUpperArmBack.onComplete(function() {
            //console.log('arm done!')
            //console.log("arrowUpPressed: " + arrowUpPressed)
            if(arrowUpPressed){
                //console.log("entratooooo")
                setTimeout(() => { RUpperArmRestart.start()}, 150);
                
            }else{
                setTimeout(() => {RUpperArmBackInitialPos.start() }, 150);
                
                
            }
        });
        

        RUpperArmBackInitialPos.onComplete(function() {
                //console.log("send back start: true & characterStandBy: true" )
                setTimeout(() => {  
                    startEnd.setStart(true)
                    startEnd.setStandBy()
                    standByMode.setArrowPressed(false)
                    startEnd.setMoving(false) }, 200);

        });
        
        RUpperArm.start()

    }

    

    leftUpperArm(parameter,pressed){

        const LUpperArm = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.008, y:0.01, z:0.01}, 1000)  

        const LUpperArmBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.032,  y:-0.01, z:-0.01 }, 1000)  

        const LUpperArmRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.032,  y:-0.01, z:-0.01 }, 1000)  

        const LUpperArmBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.024, y:0.01, z:0.01}, 1000) 

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        LUpperArm.onUpdate(update)
        LUpperArmBack.onUpdate(update)
        LUpperArmRestart.onUpdate(update)
        LUpperArmBackInitialPos.onUpdate(update)

        LUpperArm.chain(LUpperArmBack)
        //LUpperArmBack.chain(LUpperArmRestart)
        LUpperArmRestart.chain(LUpperArmBack)
        
        LUpperArmBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => {LUpperArmRestart.start() }, 150);
                
            }else{
                setTimeout(() => { LUpperArmBackInitialPos.start()}, 150);
                
            }
        });
       
        LUpperArm.start()
    }

    rightForeArm(parameter,pressed){

        const RFArm = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.02, y:0.01, z:0.01}, 1000)  

        const RFArmBack = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.004, y:0.01, z:0.01}, 1000)  

        const RFArmRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.004, y:0.01, z:0.01}, 1000)  

        const RFArmBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.016, y:0.01, z:0.01}, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
        }

        RFArm.onUpdate(update)
        RFArmBack.onUpdate(update)
        RFArmRestart.onUpdate(update)
        RFArmBackInitialPos.onUpdate(update)

        RFArm.chain(RFArmBack)
        RFArmRestart.chain(RFArmBack)

        RFArmBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => { RFArmRestart.start() }, 150);
               
            }else{
                setTimeout(() => { RFArmBackInitialPos.start()}, 150);
                
            }
        });
       
        RFArm.start()
    }

    leftForeArm(parameter,pressed){

        const LFArm = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.02, y:0.01, z:0.01}, 1000)  

        const LFArmBack = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.004, y:0.01, z:0.01}, 1000)  

        const LFArmRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.004, y:0.01, z:0.01}, 1000)  

        const LFArmBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.016, y:0.01, z:0.01}, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        LFArm.onUpdate(update)
        LFArmBack.onUpdate(update)
        LFArmRestart.onUpdate(update)
        LFArmBackInitialPos.onUpdate(update)

        LFArm.chain(LFArmBack)
        LFArmRestart.chain(LFArmBack)

        LFArmBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => { LFArmRestart.start()}, 150);
                
            }else{
                setTimeout(() => {LFArmBackInitialPos.start() }, 150);
                
            }
        });
       
       
        LFArm.start()
    }

    fingers(parameter){
        const upperFinger = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.04, y:0.01, z:0.01}, 1000)  

        const upperFingerBack = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:0.01, z:0.01}, 1000)  

        const upperFingerRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:0.01, z:0.01}, 1000)  

        const upperFingerBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.04, y:0.01, z:0.01}, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        upperFinger.onUpdate(update)
        upperFingerBack.onUpdate(update)
        upperFingerRestart.onUpdate(update)
        upperFingerBackInitialPos.onUpdate(update)

        upperFinger.chain(upperFingerBack)
        upperFingerRestart.chain(upperFingerBack)

        upperFingerBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => {upperFingerRestart.start() }, 150);
                
            }else{
                setTimeout(() => {upperFingerBackInitialPos.start() }, 150);
                
            }
        });
       
        upperFinger.start()

    }

    rightUpperLeg(parameter,pressed){

        const leg = new TWEEN.Tween({x: 0 })
        .to({x: 0.016}, 1000)  

        const legBack= new TWEEN.Tween({x: 0}) 
        .to({x: -0.024}, 1000)  

        const restart= new TWEEN.Tween({x: 0 }) 
        .to({x: 0.024}, 1000)  

        const legBackInitialPos = new TWEEN.Tween({x: 0 })
        .to({x: 0.008}, 1000)

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
        }

        leg.onUpdate(update)
        legBack.onUpdate(update)
        restart.onUpdate(update)
        legBackInitialPos.onUpdate(update)

        leg.chain(legBack)
        //legBack.chain(restart)
        restart.chain(legBack)

        legBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { restart.start()}, 150);
                
            }else{
                setTimeout(() => { legBackInitialPos.start()}, 150);
                
            }
        });
    
        
        leg.start()
    }

    leftUpperLeg(parameter,pressed){

        const Lleg = new TWEEN.Tween({x: 0})
        .to({x: -0.008}, 1000)  

        const LlegBack= new TWEEN.Tween({x: 0 }) 
        .to({x: 0.024}, 1000)  

        const Lrestart= new TWEEN.Tween({x: 0}) 
        .to({x: -0.024}, 1000)  

        const LlegBackInitialPos = new TWEEN.Tween({x: 0 })
        .to({x: -0.016}, 1000)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
            }

        Lleg.onUpdate(update)
        LlegBack.onUpdate(update)
        Lrestart.onUpdate(update)
        LlegBackInitialPos.onUpdate(update)

        Lleg.chain(LlegBack)
       //LlegBack.chain(Lrestart)
        Lrestart.chain(LlegBack)

        LlegBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => {  Lrestart.start()}, 150);
               
            }else{
                setTimeout(() => {LlegBackInitialPos.start() }, 150);
                
            }
        });

        Lleg.start()
    
    }


    rightmediumLeg(parameter,pressed){

        const Mleg = new TWEEN.Tween({x: 0 })
        .to({x: -0.004}, 1000)  

        const MlegBack= new TWEEN.Tween({x: 0}) 
        .to({x: -0.048}, 1000)   //44 ,48

        const Mrestart= new TWEEN.Tween({x: 0 }) 
        .to({x: 0.048}, 1000)   //44 ,48

        const MlegBackInitialPos = new TWEEN.Tween({x: 0 })
        .to({x: 0.052}, 1000)  //48 ,52

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
            }

        Mleg.onUpdate(update)
        MlegBack.onUpdate(update)
        Mrestart.onUpdate(update)
        MlegBackInitialPos.onUpdate(update)

        Mleg.chain(MlegBack)
        //MlegBack.chain(Mrestart)
        Mrestart.chain(MlegBack)

        MlegBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { Mrestart.start()}, 150);
                
            }else{
                setTimeout(() => {MlegBackInitialPos.start() }, 150);
                
            }
        });
    
        Mleg.start()
    }

    leftMediumLeg(parameter,pressed){

        const LMleg = new TWEEN.Tween({x: 0 })
        .to({x: -0.052, y:0.03, z:-0.01}, 1000)    //48 ,52

        const LMlegBack= new TWEEN.Tween({x: 0 }) 
        .to({x: 0.048,  y:-0.03, z:0.01 }, 1000)   //44 ,48

        const LMrestart= new TWEEN.Tween({x: 0}) 
        .to({x: -0.048}, 1000)  //44 ,48

        const LMlegBackInitialPos = new TWEEN.Tween({x: 0})
        .to({x: 0.004}, 1000)  


        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
            }

        LMleg.onUpdate(update)
        LMlegBack.onUpdate(update)
        LMrestart.onUpdate(update)
        LMlegBackInitialPos.onUpdate(update)

        LMleg.chain(LMlegBack)
        //LMlegBack.chain(LMrestart)
        LMrestart.chain(LMlegBack)

        LMlegBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => {LMrestart.start() }, 150);
                
            }else{
                setTimeout(() => {LMlegBackInitialPos.start() }, 150);
                
            }
        });
    
        LMleg.start()
    }
    /*
    rightFoot(parameter,pressed){

        const RFoot = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:0.03, z:-0.01}, 1000)  

        const RFootBack= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0,  y:-0.03, z:0.01 }, 1000)  

        const RFootrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0,  y:0.03, z:-0.01 }, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        RFoot.onUpdate(update)
        RFootBack.onUpdate(update)
        RFootrestart.onUpdate(update)

        RFoot.chain(RFootBack)
        //RFootBack.chain(RFootrestart)
        //RFootrestart.chain(RFootBack)

        RFoot.start()
    
    }
    leftFoot(parameter,pressed){

        const LFoot = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:0.03, z:-0.01}, 1000)  

        const LFootBack= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0,  y:-0.03, z:0.01 }, 1000)  

        const LFootrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0,  y:0.03, z:-0.01 }, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        LFoot.onUpdate(update)
        LFootBack.onUpdate(update)
        LFootrestart.onUpdate(update)

        LFoot.chain(LFootBack)
        //LFootBack.chain(LFootrestart)
        //LFootrestart.chain(LFootBack)

        LFoot.start()
    
    }
*/
    rightSkirt(parameter,pressed){

        const RSkirt = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.032, y:-0.03, z:0.01}, 1000)  

        const RSkirtBack= new TWEEN.Tween({x: 0, y:0 , z: 0}) 
        .to({x: 0.02,  y:0.03, z:-0.01 }, 1000)  

        const RSkirtrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.02,  y:0.03, z:0.01 }, 1000)  

        const RSkirtBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.012, y:-0.03, z:0.01}, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        RSkirt.onUpdate(update)
        RSkirtBack.onUpdate(update)
        RSkirtrestart.onUpdate(update)
        RSkirtBackInitialPos.onUpdate(update)

        RSkirt.chain(RSkirtBack)
        //RSkirtBack.chain(RSkirtrestart)
        RSkirtrestart.chain(RSkirtBack)

        RSkirtBack.onComplete(function() {
            if(arrowUpPressed){
                setTimeout(() => {RSkirtrestart.start() }, 150);
                
            }else{
                setTimeout(() => {RSkirtBackInitialPos.start() }, 150);
                
            }
        });
       
        RSkirt.start()
    }

    leftSkirt(parameter,pressed){

        const LSkirt = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.012, y:0.03, z:-0.01}, 1000)  

        const LSkirtBack= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.02,  y:-0.03, z:0.01 }, 1000)  

        const LSkirtrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.02,  y:0.03, z:-0.01 }, 1000)  

        const LSkirtBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.032, y:0.03, z:-0.01}, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        LSkirt.onUpdate(update)
        LSkirtBack.onUpdate(update)
        LSkirtrestart.onUpdate(update)
        LSkirtBackInitialPos.onUpdate(update)

        LSkirt.chain(LSkirtBack)
        //LSkirtBack.chain(LSkirtrestart)
        LSkirtrestart.chain(LSkirtBack)

        LSkirtBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { LSkirtrestart.start()}, 150);
                
            }else{
                setTimeout(() => { LSkirtBackInitialPos.start()}, 150);
                
            }
        });

        LSkirt.start()
    
    }

    rightLowerSkirt(parameter,pressed){

        const RLSkirt = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.02, y:-0.03, z:0.01}, 1000)  

        const RLSkirtBack = new TWEEN.Tween({x: 0, y:0 , z: 0}) 
        .to({x: 0.004,  y:0.03, z:-0.01 }, 1000)  

        const RLSkirtrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.004,  y:0.03, z:0.01 }, 1000)  

        const RLSkirtBackInitialPos = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.016, y:-0.03, z:0.01}, 1000) 

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            }

        RLSkirt.onUpdate(update)
        RLSkirtBack.onUpdate(update)
        RLSkirtrestart.onUpdate(update)
        RLSkirtBackInitialPos.onUpdate(update)

        RLSkirt.chain(RLSkirtBack)
        //RLSkirtBack.chain(RLSkirtrestart)
        RLSkirtrestart.chain(RLSkirtBack)

        RLSkirtBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { RLSkirtrestart.start()}, 150);
                
            }else{
                setTimeout(() => {RLSkirtBackInitialPos.start() }, 150);
                
            }
        });
    
        RLSkirt.start()
    }

    leftLowerSkirt(parameter,pressed){

        const LLSkirt = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.012, y:0.03, z:-0.01}, 1000)  

        const LLSkirtBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.004,  y:-0.03, z:0.01 }, 1000)  

        const LLSkirtrestart= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.004,  y:0.03, z:-0.01 }, 1000) 
        
        const LLSkirtBackInitialPos = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.016,  y:-0.03, z:0.01 }, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
        }

        LLSkirt.onUpdate(update)
        LLSkirtBack.onUpdate(update)
        LLSkirtrestart.onUpdate(update)
        LLSkirtBackInitialPos.onUpdate(update)

        LLSkirt.chain(LLSkirtBack)
        //LLSkirtBack.chain(LLSkirtrestart)
        LLSkirtrestart.chain(LLSkirtBack)

        LLSkirtBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => {LLSkirtrestart.start() }, 150);
                
            }else{
                setTimeout(() => {LLSkirtBackInitialPos.start() }, 150);
                
            }
        });

        LLSkirt.start()
    
    }


    rightUpperRibbon(parameter,pressed){

        const RURibbon = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.012, y:-0.001, z:0.001}, 1000)  

        const RURibbonBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.02,  y:0.01, z: 0.01 }, 1000)  

        const RURibbonRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.02,  y:0.01, z: -0.01 }, 1000) 
        
        const RURibbonBackInitialPos = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.04,  y:0.01, z: -0.011 }, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateZ(object.z)
            parameter.rotateX(object.x)
            }

        RURibbon.onUpdate(update)
        RURibbonBack.onUpdate(update)
        RURibbonRestart.onUpdate(update)
        RURibbonBackInitialPos.onUpdate(update)

        RURibbon.chain(RURibbonBack)
        //RURibbonBack.chain(RURibbonRestart)
        RURibbonRestart.chain(RURibbonBack)

        RURibbonBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => {RURibbonRestart.start() }, 150);
                
            }else{
                setTimeout(() => {RURibbonBackInitialPos.start() }, 150);
                
            }
        });
       
        RURibbon.start()
    }

    leftUpperRibbon(parameter,pressed){

    

        const LURibbon = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.012, y:0.01, z:-0.008}, 1000)  

        const LURibbonBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.02,  y:-0.01, z:0.005 }, 1000)  

        const LURibbonRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.02,  y:-0.01, z: -0.005 }, 1000)
        
        const LURibbonBackInitialPos = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.02,  y:0.01, z: 0.005 }, 1000)

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            parameter.rotateZ(object.z)
        }

        LURibbon.onUpdate(update)
        LURibbonBack.onUpdate(update)
        LURibbonRestart.onUpdate(update)
        LURibbonBackInitialPos.onUpdate(update)

        LURibbon.chain(LURibbonBack)
        //LURibbonBack.chain(LURibbonRestart)
        LURibbonRestart.chain(LURibbonBack)

        LURibbonBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { LURibbonRestart.start()}, 150);
                
            }else{
                setTimeout(() => {LURibbonBackInitialPos.start() }, 150);
                
            }
        });

        LURibbon.start()
    }

    Ribbon(parameter,pressed){ //every others ribbon

        const ribbon = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.004, y:0.01, z:0.01}, 1000)  

        const ribbonBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.002,  y:-0.01, z:-0.01 }, 1000)  

        const ribbonRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.002,  y:-0.01, z:-0.01 }, 1000)
        
        const ribbonBackInitialPos = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.002,  y:-0.01, z:0 }, 1000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
        }

        ribbon.onUpdate(update)
        ribbonBack.onUpdate(update)
        ribbonRestart.onUpdate(update)
        ribbonBackInitialPos.onUpdate(update)

        ribbon.chain(ribbonBack)
        //ribbonBack.chain(ribbonRestart)
        ribbonRestart.chain(ribbonBack)

        ribbonBack.onComplete(function() {
            
            if(arrowUpPressed){
                setTimeout(() => { ribbonRestart.start()}, 150);
                
            }else{
                setTimeout(() => {ribbonBackInitialPos.start() }, 150);
                
            }
        });

       
        ribbon.start()
    }
    /*
    umbrella(parameter,pressed){

        const umb = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.002, y: 0.002, z:-0.15}, 4000)  

        const umbBack = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.008,  y: -0.008, z: 0.6 }, 4000)  

        const umbRestart = new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.008,  y:0.008, z: -0.6 }, 4000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.translateZ(object.z)
            parameter.rotateY(object.y)
            }

        umb.onUpdate(update)
        umbBack.onUpdate(update)
        umbRestart.onUpdate(update)

        umb.chain(umbBack)
        umbBack.chain(umbRestart)
        //umbRestart.chain(umbBack)

       
        umb.start()
    }

        umbrellaLA(parameter,pressed){
            const ULFArm = new TWEEN.Tween({x: 0 , y:0, z:0})
            .to({x: 0.001, y:0.005, z:-0.5}, 4000)  

            const update = function(object =(x, y, z), elapsed ){
            parameter.rotateY(object.y)
            parameter.translateZ(object.z)
            }

            ULFArm.onUpdate(update)
       
            ULFArm.start()
        }
        umbrellaCAZZO(parameter,pressed){

            const cazzoArm = new TWEEN.Tween({x: 0 , y:0, z:0})
            .to({x: 0.001, y:0.1, z:-0.5}, 4000)  

            const cazzoArmBack = new TWEEN.Tween({x: 0 , y:0, z:0})
            .to({x: -0.001, y:-0.1, z:-0.5}, 4000)  

            const update = function(object =(x, y, z), elapsed ){
                parameter.rotateZ(object.x)
                parameter.translateY(object.y)
            
            }

            cazzoArm.onUpdate(update)
            cazzoArmBack.onUpdate(update)

            cazzoArm.chain(cazzoArmBack)
            cazzoArmBack.chain(cazzoArm)
       
            cazzoArm.start()
        }
    */
}

export { running };