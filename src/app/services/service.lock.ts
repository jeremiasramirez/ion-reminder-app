import { Injectable } from "@angular/core"


@Injectable()

export class ServiceLock{
    
    constructor(){
    }

    setPassword(password:{pass:string;email:string|number}){
        localStorage.setItem("lock", JSON.stringify([ password ]))
    }
    existPassword(){
        
        if (localStorage.getItem("lock"))
            return true 
        else false
        
    }

    getPassword(){
       if (localStorage.getItem("lock"))
        return JSON.parse(localStorage.getItem("lock"))
    }
}