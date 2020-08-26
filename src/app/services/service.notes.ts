import { Injectable } from "@angular/core"

import { modelNotes } from '../model/model.notes'
@Injectable()

export class ServiceNotes{
    public notes  :modelNotes[]=[];
  
    constructor(){
        this.verifiedDataStorage()    
        if (!localStorage.getItem("categories")) this.setCategories([{name:"Work"}])
    }

    verifiedDataStorage(){
        
        if (localStorage.getItem("notes"))
            this.notes= JSON.parse(localStorage.getItem("notes")) 
          
         
       
    }

    addNew( data:any ){
        
        this.notes.unshift(data)
       
        this.getLocalItem()
      
       

    }
    getLocalItem(){
        localStorage.setItem("notes",JSON.stringify(this.notes))
    }
    updateStorage( ){
        
        localStorage.setItem("notes", JSON.stringify(this.notes))
        ///this.notes= JSON.parse(localStorage.getItem("notes")) 
       
    }
    updateItem_(pos:number,data){
        this.notes[pos] = data;
        this.updateStorage()
    } 

    deleteItem(pos){
        this.notes.splice(pos,1)
        this.updateStorage();
    }

    getCategories(){
        return JSON.parse(localStorage.getItem("categories")); 
    }
    setCategories(categ){
        localStorage.setItem("categories", JSON.stringify(categ))
    }
    

 



    

}

 
export { modelNotes } from '../model/model.notes'
 