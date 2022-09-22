import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import {finishes} from './main.js'

class openObj{
    openChest(parameter){
        const openC = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:-0.07, z:0}, 500)  

        const update = function(object =(y), elapsed ){
            parameter.rotateY( object.y )
        }

        openC.onUpdate(update)

        openC.start()

    }

    closeChest(parameter){
        const closeC = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:0.07, z:0}, 500)  

        const update = function(object =(y), elapsed ){
            parameter.rotateY( object.y )
        }

        closeC.onUpdate(update)

        closeC.start()

    }
    openRightChest(parameter){
        const startEnd = new finishes();
        const openrightC = new TWEEN.Tween({x: 0 , y:0, z:0})
        .to({x: 0, y:-0.07, z:0}, 500)  

        const update = function(object =(y), elapsed ){
            parameter.rotateY( object.y )
        }

        openrightC.onUpdate(update)

        openrightC.onComplete(function() {
            startEnd.setKey()
        });

        openrightC.start()

    }
}
export {openObj};