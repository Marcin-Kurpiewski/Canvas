import {testY} from "./ui-class.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



class Shape{

    constructor(name){
        this.name=this.getName()
    
    
    this.sizes=this.getSize(),
    //this.shapeType=this.getShape(),
   // this.line=this.getLine(),
    //this.shapeBg=this.getBackground(),
    //this.position=this.getPosition(),
    //this.edit=true;
    this.drop=false;


  
    document.getElementById('shape-name').addEventListener('input', this.getName);
    document.getElementById('size-width').addEventListener('input', this.getSize);
    document.getElementById('size-height').addEventListener('input', this.getSize);
    document.getElementById('shapes').addEventListener('click', this.drawShape);
   
    
}

getName(){
    const name = document.getElementById('shape-name').value;
    console.log(name);
    //to do check name if exist, show information //also addin numeric number
    return name;
}
getSize(){
    const width = document.getElementById('size-width').value;
    const height = document.getElementById('size-height').value;
    const sizes={};
    if(width!==''){
        console.log(width + ' widthForm');
        sizes.width=width;
    } else {
        console.log('get size width error ');
    } 

    if(height!==''|| height!==undefined){
        console.log(height + ' heightForm');
        sizes.height=height;
    } else {
        console.log('get size height error ');
    } 
console.info(JSON.stringify(sizes));

    return sizes;

}
getShape(){
  const shape = document.querySelector('.shapes');
  
  
    console.log(shape);
}
getLine(){
    console.log('getLine');
}
getBackground()
{
    console.log('get b-g')
}
getPosition()
{
    console.log('getPosition');
}




}

class UI {
    static displayShapes(){
        
    }
    static addShapeToList(shape){

    }
    static editShape(shape){

    }
    static removeShape(shape){

    }
    static lockShape(shape){

    }
    static unlock(shape){

    }
    static clearFileds(){

    }
    static showMessage(msg, action){
        //missing something 
    }

}






   

// Testing ---> 

document.getElementById('create').addEventListener('click', createNewObject);
document.getElementById('shapes').addEventListener('click', getShapeType);

/*document.getElementById('shapes').addEventListener('click', function(){
        
})
*/
// shape max size == canvas size

function createNewObject(shapeType){
    console.log(event.target.id);
    const newShape = new Shape();
    if(shapeType=='square'){
        const ca = document.getElementById('canvas');
        const ctx = ca.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 10,  this.getSize.sizes.width, this.getSize.sizes.height);
        ctx.stroke();
    }
    
      
       
    
    return newShape;
}

function getShapeType(event){
    const typeShape= event.target.id
    console.info('Shape id = ' + typeShape );
 if(typeShape=='circle'){
    console.info('Shape id = ' + typeShape );
 }
 if(typeShape=='square'){
     
    createNewObject('square');
    console.info('Shape id = ' + typeShape );
 }
 if(typeShape=='rectangle'){
    console.info('Shape id = ' + typeShape );
 }
 if(typeShape=='triangle'){
    console.info('Shape id = ' + typeShape );
 }
         
     return typeShape;
   }

   

const abc = new Shape('ABC');
