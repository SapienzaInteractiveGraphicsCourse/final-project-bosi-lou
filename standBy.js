import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import {finishes} from './main.js'

var arrowPressed = false


class standBy{

    setArrowPressed(s){
        arrowPressed = s
    }
   
    removeUmbrella(parameter){
        const EUmb= new TWEEN.Tween({x : 0, y:0, z:0})
        .to({x: 0 , y:0,  z:0}, 1)
        const Econt = new TWEEN.Tween({x: 0, y:0, z:0})
        .to({x: 0 , y:0,  z:0}, 1)  //z move on land , x height
        
        const update = function(object =(x,y,z), elapsed ){
            parameter.scale.set(object.x, object.y, object.z)
        }

        EUmb.onUpdate(update)
        Econt.onUpdate(update)

        EUmb.chain(Econt)
        Econt.chain(EUmb)

        EUmb.start()

    }

    breartBreath(parameter, pressed){
        const standByEnd = new finishes();

        const breathBreast = new TWEEN.Tween({x : 0.8, y:0.8, z:0.8})
        .to({x: 1.2 , y:1.2,  z:1.2}, 1000)  //z move on land , x height

        const breathBreastDown = new TWEEN.Tween({x: 1.2, y:1.2, z:1.2})
        .to({x: 0.8 , y:0.8,  z:0.8}, 1000)  //z move on land , x height

        const breathBreastRestart = new TWEEN.Tween({x : 0.8, y:0.8, z:0.8})
        .to({x: 1.2 , y:1.2,  z:1.2}, 1000)
        
        const update = function(object =(x,y,z), elapsed ){
            parameter.scale.set(object.x, object.y, object.z)
        }

        breathBreast.onUpdate(update)
        breathBreastDown.onUpdate(update)
        breathBreastRestart.onUpdate(update)

        breathBreast.chain(breathBreastDown)
        breathBreastRestart.chain(breathBreastDown)

        //console.log('arrowPressed: ' + arrowPressed) //twice cause 2 breast
        
        breathBreastDown.onComplete(function() {
            //console.log('standBy done!')
            if(!arrowPressed){
                breathBreastRestart.start()
            }
        });

        breathBreast.start()
    }

    Clavicle(parameter,pressed){

        const clavicle = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.001, y:0, z:0}, 1000)  

        const clavicleBack= new TWEEN.Tween({x: 0}) 
        .to({x: -0.001,  y:0, z:0 }, 1000)  

        const clavicleRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.001, y:0, z:0}, 1000)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
            }

        clavicle.onUpdate(update)
        clavicleBack.onUpdate(update)
        clavicleRestart.onUpdate(update)

        clavicle.chain(clavicleBack)
        clavicleRestart.chain(clavicleBack)

        clavicleBack.onComplete(function() {
            if(!arrowPressed){
                clavicleRestart.start()
            }
        });
        clavicle.start()
    }

    LowerArm(parameter,pressed){

        const arm = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.006, y:0, z:0}, 1000)  

        const armBack= new TWEEN.Tween({x: 0}) 
        .to({x: 0.006,  y:0, z:0 }, 1000) 
        
        const armRestart = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.006, y:0, z:0}, 1000)  

        const update = function(object =(x), elapsed ){
            parameter.rotateX(object.x)
        }

        arm.onUpdate(update)
        armBack.onUpdate(update)
        armRestart.onUpdate(update)

        arm.chain(armBack)
        armRestart.chain(armBack)

        armBack.onComplete(function() {
            if(!arrowPressed){
                armRestart.start()
            }
        });
        arm.start()
    }
    /*
    upRibbon(parameter,pressed){

        const ribbon = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: -0.005, y:0.01, z:-0.01}, 4000)  

        const ribbonBack= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: 0.005,  y:-0.01, z:0.01 }, 4000)  

        const update = function(object =(x, y, z), elapsed ){
           
            parameter.rotateX(object.x)
            }

        ribbon.onUpdate(update)
        ribbonBack.onUpdate(update)

        ribbon.chain(ribbonBack)
        ribbonBack.chain(ribbon)

        if(pressed)
            ribbon.stop()
        else
            ribbon.start()
    }

    downRibbon(parameter,pressed){

        const secRibbon = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0.005, y:-0.03, z:0.01}, 4000)  

        const secRibbonBack= new TWEEN.Tween({x: 0 , y:0 , z: 0}) 
        .to({x: -0.005,  y:0.03, z:-0.01 }, 4000)  

        const update = function(object =(x, y, z), elapsed ){
            parameter.rotateX(object.x)
            
            
            }

        secRibbon.onUpdate(update)
        secRibbonBack.onUpdate(update)

        secRibbon.chain(secRibbonBack)
        secRibbonBack.chain(secRibbon)

        if(pressed)
            secRibbon.stop()
        else
            secRibbon.start()
    }
*/
}
export { standBy };