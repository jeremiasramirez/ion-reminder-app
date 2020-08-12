import { Injectable } from "@angular/core"

@Injectable()

export class DarkMode {

    constructor(){
       this.existDark()
    }

    setDark(){
        localStorage.setItem("dark","true")
    }
    quitDark(){
        localStorage.removeItem("dark") 
    }
    existDark(){
        
        if (localStorage.getItem("dark")){
            document.body.classList.add("dark")
            return true
        }
        else{
            return false
        }

    }
}