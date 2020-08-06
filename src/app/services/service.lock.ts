import { Injectable } from "@angular/core"


@Injectable()

export class ServiceLock{
    
    constructor(){
    
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

    verifiedPass(pass:any){
        if (pass === this.getPassword()){
            return true
        }
        else{
            return false
        }
    }
}