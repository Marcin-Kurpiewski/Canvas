import {UI} from "./ui.js"
/*
shape = {
    id:name + '_' + Math.random * 100,
    options:{
        hasError:false,
        canDrop:false,// default true

    },
    shapeType:[circle,square,rectangle,triangle,star],
    size:{
        a:150,
        b:150,
        c:'',
        d:''
    },
    backgroundColor:'black',
    lineColor:'red'
    



}

*/
class Shape{

    constructor(name, options){
        if(this.options==''|| this.options==undefined){
            this.options={}
        }
        if(name=='' ||name==undefined){
            this.name=this.getName();
        } else { 
            this.name=name;
        }
        
        this.id=this.generateId(this.name);
        this.size=this.getSize()
        this.options={
            hasError:false,
            canDrop:false
        },
        this.shapeType=
    //this.shapeType=this.getShape(),
   // this.line=this.getLine(),
    //this.shapeBg=this.getBackground(),
    //this.position=this.getPosition(),
    //this.edit=true;
    


  
    document.getElementById('shape-name').addEventListener('input', this.getName);
    document.getElementById('size-width').addEventListener('input', this.getSize);
    document.getElementById('size-height').addEventListener('input', this.getSize);
    document.getElementById('shapes').addEventListener('click', this.drawShape);
   
    
}

getName(){
    const name = document.querySelector('#shape-name').value;
    if(name=='' || name==undefined ){
        this.options.hasError==true 
        UI.showMessage('Write shape name ', 'validation','name')
    }
    //to do check name if exist, show information //also addin numeric number
    return name;
}
generateId(name){
    
    const number = Math.random()*100;
    const id = `${name}_${number}`
    //console.log(id);
    return id;
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
shapeType(){

}
// add shape to list --> ##TODO - icon edit, lock , remove  
addToList(shape){
    const list = document.getElementById('shape-list');
    const li = document.createElement('li');
    li.setAttribute("class", "shape-item")
    li.setAttribute('id', this.id);
    const title = document.createElement('h4');
    title.setAttribute('class','shape-title');
    const text = document.createTextNode(this.name);
    title.appendChild(text);
    li.appendChild(title);
    list.appendChild(li);
    
    console.log( li.textContent + ' addtolistStart')
}




}

export {Shape}