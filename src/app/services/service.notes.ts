import { Injectable } from "@angular/core"
import { modelNotes } from './notes.model'

@Injectable()

export class ServiceNotes{
    notes : modelNotes[] = [
        {
            id:1,
            title: 'Hurracan',
            date: null,
            description: null
        },
        {
            id:2,
            title: 'Lluvias',
            date: null,
            description: null
        }
    ]

    constructor(){
            
        //    localStorage.setItem("notes", JSON.stringify(this.notes))
           
            //console.log(JSON.parse(localStorage.getItem("notes"))[0] )
            
    }

    getItem(id:number){
        
        
        return this.notes.find((e)=>{
            
            if( e.id === id){
                this.notes
            }

        })

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

 
