const can = document.querySelectorAll('.canvas');



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

function getSize(){

    var sizes={};
    var widthForm = document.getElementById('size-width').value;
    var heightForm = document.getElementById('size-height').value;
    if(widthForm!==''|| widthForm==undefined){
console.log(widthForm + ' widthForm');
sizes.width=widthForm
    } else {
        console.log('get size width error ');
    } 

    if(heightForm!==''|| heightForm==undefined){
        console.log(heightForm + ' heightForm');
        sizes.height=heightForm
    } else {
        console.log('get size height error ');
    } 

    return sizes;
}






// shape max size == canvas size

