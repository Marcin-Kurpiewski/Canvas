import{Shape} from "./shape.js"




const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


document.getElementById('create').addEventListener('click', createNewObject);
document.getElementById('shapes').addEventListener('click', getShapeType);

/*document.getElementById('shapes').addEventListener('click', function(){
        
})
*/
// shape max size == canvas size

function createNewObject(){
    console.log(event.target.id);
    const newShape = new Shape(name);
    // if(shapeType=='square'){
    //     const ca = document.getElementById('canvas');
    //     const ctx = ca.getContext("2d");
    //     ctx.beginPath();
    //     ctx.rect(20, 10,  this.getSize.sizes.width, this.getSize.sizes.height);
    //     ctx.stroke();
    // }  
    if(newShape.options.hasError==true){
        return  console.log('newShape' + JSON.stringify(newShape))
    }
    
    newShape.addToList(newShape);

    shapeStore.push(newShape);
    console.log(shapeStore);
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

   
 


   //** for the testing  *//
   
   const shapeOne = new Shape('shapeOne');
   shapeOne.addToList(shapeOne);
   const shapeTwo = new Shape('shape Two');
   shapeTwo.addToList(shapeTwo);
   const shapeThree = new Shape('shape 3');
   shapeOne.addToList(shapeThree);
   console.log(shapeOne)


   const shapeStore=[];
   