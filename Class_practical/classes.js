class rectangular{
    constructor(height,weith,color){
        this.height=height;           //how "this" works-> it means when we call class like
        this.weith=weith;         //rec below then it look like(rec.height=hright) which means
        this.color=color;         //the height value is saved to rec height if there was rec2 
    }                             //then the height will save to rec2(rec2.height=height)
    area(){
        const area = this.height*this.weith;
        return area; //these are method
    }
    paint(){
        console.log(`The color of paint is ${this.color}`);
        
    }
}

const rec = new rectangular(4,6,"Red")
const recArea=rec.area();

//console.log(recArea);


// *************Pre-define Classes**************

//Date
const date = new Date();
//console.log(date);


//Map
const map = new Map();
map.set('name','Aditya')
map.set('age','21')

console.log(map.get('name'))