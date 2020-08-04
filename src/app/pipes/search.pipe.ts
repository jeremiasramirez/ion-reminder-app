import { Pipe, PipeTransform } from "@angular/core"
import { modelNotes } from '../model/model.notes'

@Pipe({
    name: "searchB"
})

export class SearchPipe implements PipeTransform{
    
    transform(arr,data:any){

        return arr.filter((resp:modelNotes)=>{
            if (data !== ""){
                return resp.title.toString().toLocaleLowerCase().includes(data.toLocaleLowerCase())
            }
             

        })

    }
}