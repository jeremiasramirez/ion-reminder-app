import { Injectable } from "@angular/core"

import { modelNotes } from '../model/model.notes'
@Injectable()

export class ServiceNotes{
    public notes  :modelNotes[]=[];

    constructor(){
        this.verifiedDataStorage()       
    }

    verifiedDataStorage(){
        
        if (localStorage.getItem("notes"))
            this.notes= JSON.parse(localStorage.getItem("notes")) 
         
       
    }

    addNew( data:any ){
        
        this.notes.unshift(data)
        this.updateStorage()
    }
    updateStorage( ){
        localStorage.setItem("notes", JSON.stringify(this.notes))
        this.notes=JSON.parse(localStorage.getItem("notes"))
    }
    updateItem_(pos:number,data){
        this.notes[pos] = data;
        this.updateStorage()
    } 
 



    

}

 
export { modelNotes } from '../model/model.notes'