import { Injectable } from "@angular/core"

@Injectable()

export class ServiceNotes{
    notes : modelNotes[] = [];

    constructor(){
       
        this.notes.push( {
                id:1,
                title: 'Hurracan',
                date: 'June 1 2020',
                description: 'nada por ahora'
            })
          
             
            localStorage.setItem("notes", JSON.stringify(this.notes))
           
            //console.log(JSON.parse(localStorage.getItem("notes"))[0] )
           this.update()
    }

    getItem(id:number){
        
        this.notes = JSON.parse(localStorage.getItem("notes")) 
        return this.notes.find((e)=>{
            return e.id === id
        })

    }

    update(){
       setTimeout(()=>{
 
            this.notes.push({
                id:3,
                title: 'Lluvias',
                date: 'June 3 2020',
                description: 'lluvias baratas'
            })
            localStorage.setItem("notes", JSON.stringify(this.notes))
            console.log(localStorage.getItem("notes"))
            console.log(this.notes)
        },5000)

        
    }

}

 
interface modelNotes{

    id:number;
    title:string|number;
    date:  any;
    description: any;

}