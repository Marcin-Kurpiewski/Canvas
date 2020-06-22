const can = document.querySelectorAll('.canvas');

/*
const shape = {
    width:'',
    height:'',
    lineWidth:'',
    shape:[],

}

*/
/*
function getShape(event){
this.id = event.target.id
 var typeShape=id;
 if(typeShape=='circle')
 if(typeShape=='square')
 if(typeShape=='rectangle')
 if(typeShape=='triangle')

      console.info('Shape id = ' + typeShape );
  return typeShape;
}

var typeShapeBtn = document.getElementById('shapes');
typeShapeBtn.addEventListener('click', drawShape);
function drawShape(){
    var type=getShape(event);
    var size=getSize();
    
    var ca = document.getElementById('canvas');
    var ctx = ca.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20,  size.height, size.width);
    ctx.stroke();
    console.log('width, height, type ' +  type +' '+ size.height +' '+ size.width );
}
//addEventListener('click',getSize);

*/

class Shape{

    constructor(name,width,height,typeShape, bgColor, lineColor){
    let id=this.generateId();
    if(this.name==undefined){
        this.name=this.getName()
    }
    if(this.height==undefined || this.height==''){
        this.height=this.getSize();    
    }
    if(this.width==undefined || this.width==''){
        this.width= this.getSize();
    }

   /* this.typeShape=this.getTypeShape();
    this.bgColor=this.getBgColor();
    this.lineColor=this.getLineColor();
    */
  // document.getElementById('test').addEventListener('click', this.getName);
   document.getElementById('shape-name').addEventListener('input', this.getName);
   document.getElementById('size-width').addEventListener('input', this.getSize);
   document.getElementById('size-height').addEventListener('input', this.getSize);
   document.getElementById('circle').addEventListener('click', this.getShapeType);
   
   
   const shapeNew = {
        name:this.getName(),
        sizes:this.getSize()
    };
    console.log(JSON.stringify(shapeNew));
   return shapeNew;
}
generateId(){
    //toDo
}
getName(){
    const name = document.getElementById('shape-name').value;
    console.log(name);
    //to do check name if exist show information //also addin numeric number
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
getShapeType(event){
    console.log('clik');
    this.id = event.target.id
    const typeShape=id;
    
   
         console.info('Shape id = ' + typeShape );
     return typeShape;
   }





}

// Testing ---> 

document.getElementById('create').addEventListener('click', createNewObject);


// shape max size == canvas size

function createNewObject(){
    const newShape = new Shape();
    return newShape;
}