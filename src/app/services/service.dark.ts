import { Injectable } from "@angular/core"

@Injectable()

export class DarkMode {
    public checkedDark:boolean
    constructor(){
       this.existDark()

       this.checkedDark = this.existDark()
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

    darks(){
        document.body.classList.toggle("dark")
        if (this.checkedDark == false) this.checkedDark=true; else this.checkedDark = false
          
        if (this.checkedDark){
          this.setDark()
        }
        else{
          this.quitDark()
        }
       
      }
}