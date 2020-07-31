import { Injectable } from "@angular/core"
import { modelNotes } from './notes.model'

@Injectable()

export class ServiceNotes{
    public notes  :modelNotes[]=[];

    constructor(){
        
        if (localStorage.getItem("notes")) this.notes= JSON.parse(localStorage.getItem("notes"))
       
        //localStorage.setItem("notes", JSON.stringify(this.notes))
        //console.log(JSON.parse(localStorage.getItem("notes"))[0] )
    }

    addNew( data:any ){
        
        this.notes.unshift(data)
        this.updateStorage()
    }
    updateStorage(){
        localStorage.setItem("notes", JSON.stringify(this.notes))
        this.notes=JSON.parse(localStorage.getItem("notes"))
    }
    updateItem_(pos:number,data){
        this.notes[pos] = data;
        this.updateStorage()
    } 

    updateItem(){
  

        /*
        localStorage.setItem("notes", JSON.stringify(this.notes))
        this.notes = JSON.parse(localStorage.getItem("notes")) 
     
            this.notes.push({
                id:3,
                title: 'Lluvias',
                date: 'June 3 2020',
                description: 'lluvias baratas'
            })
            
        console.log(localStorage.getItem("notes"))
        console.log(this.notes)
      */
    }




    

}

 
