import { Injectable } from "@angular/core"
import { modelNotes } from '../model/model.notes';


@Injectable()

export class ServiceFavorite{
    public favorite  :modelNotes[]=[];

     
   
    constructor(){
        this.verifiedDataStorage()    
     
    }

    verifiedDataStorage(){
        
        if (localStorage.getItem("favorite"))
            this.favorite= JSON.parse(localStorage.getItem("favorite")) 
    }

    addNew( data:any ){
        
        this.favorite.unshift(data)
        this.getLocalItem();
      
    }
    getLocalItem(){
        localStorage.setItem("favorite",JSON.stringify(this.favorite))
    }
    updateStorage( ){
        
        localStorage.setItem("favorite", JSON.stringify(this.favorite))
        ///this.notes= JSON.parse(localStorage.getItem("favorite")) 
       
    }
    updateItem_(pos:number,data){
        this.favorite[pos] = data;
        this.updateStorage()
    } 

    deleteItem(pos){
        this.favorite.splice(pos,1)
        this.updateStorage();
    }
}