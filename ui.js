
class UI {
  
    static showMessage(msg, type, place ){
     

        if(type=='validation'){
            if(place=='name'){
                const place = document.querySelector('#name-label');
                // const p = document.createElement('p');
               // p.setAttribute('class','mesage-validation');
                const text =document.createTextNode(msg);
                //p.append(text);
                // place.append(p);
                alert(msg);

                
            }
             
        }
        console.log(`${msg}-${type}-${place}`)
    }
    
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
        console.log('clear cos tam');
    }
  
   

}

export{UI}