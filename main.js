const canvas = document.querySelectorAll('.canvas');



function getShape(event){
this.id = event.target.id
  if(this.id == 'circle'){
      alert(this.id + '=circle');
      addShapeType(this.id);
  }
}
function addShapeType(type){
    if(type!=='' && type!==undefined ){
        console.log('createType');
    } else {
        console.log(err);
        
    }
}
addEventListener('click', getShape);

