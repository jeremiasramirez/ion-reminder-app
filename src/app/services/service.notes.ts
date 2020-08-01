import { Injectable } from "@angular/core"
import { modelNotes } from './notes.model'

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
        
        this.notes.push(data)
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

 
