import { Injectable } from "@angular/core"
import { modelNotes } from '../model/model.notes';


@Injectable()

export class ServiceCompleted{
    public completed  :modelNotes[]=[];

    constructor(){
        this.verifiedDataStorage()       
    }

    verifiedDataStorage(){
        
        if (localStorage.getItem("completed"))
            this.completed= JSON.parse(localStorage.getItem("completed")) 
         
       
    }

    addNewComplete( data:any ){
        
        this.completed.unshift(data)
        this.updateStorage()
    }

    deleteNoteComplete(pos){
 
        this.completed.splice(pos,pos)
        this.updateStorage()

    }
    updateStorage( ){
        localStorage.setItem("completed", JSON.stringify(this.completed))
        this.completed=JSON.parse(localStorage.getItem("completed"))
    }

  /*  updateItem_(pos:number,data){
        this.notes[pos] = data;
        this.updateStorage()
    } 
 */
}