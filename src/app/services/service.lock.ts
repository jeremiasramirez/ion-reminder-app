import { Injectable } from "@angular/core"


@Injectable()

export class ServiceLock{
    
    constructor(){
        this.setPassword({pass:"0847", email:"jeremias@gmail.com"})
    }

    setPassword(password:{pass:string;email:string|number}){
        sessionStorage.setItem("lock", JSON.stringify([ password ]))
    }
    existPassword(){
        
        if (sessionStorage.getItem("lock"))
            return true 
        else false
        
    }

    getPassword(){
       if (sessionStorage.getItem("lock"))
        return JSON.parse(sessionStorage.getItem("lock"))
    }
}