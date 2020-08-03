import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { Router } from '@angular/router'; 
import { timer } from 'rxjs';
import { LockGuard } from 'src/app/guard/lock.guard';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
  providers:[
    ServiceLock
  ]
})
export class SignPage  {
  public pass = ""

  public openLock  = {
    on:false,
    text:'Lock'
  }

  constructor(private lockService:ServiceLock, private router:Router, public guard:LockGuard) { 
      
    if (sessionStorage.getItem("opened")){
    
      this.router.navigate(["home/notes"])
  }
   }
 

 private analizePass(){

    if(this.pass.length === 4 ){ 
      if (this.pass == this.lockService.getPassword()[0].pass){

        
        this.openLock.on= true
        this.openLock.text= "Unlock" 

        timer(2000).subscribe( ()=> { 
          sessionStorage.setItem("opened", JSON.stringify([ {open:'true'} ]))
          this.guard.opn=true
          this.router.navigate(["home/notes"])
         })
        
      }
      else{

        this.pass = "";
        this.openLock.on= false
        this.openLock.text= "Lock" 

      }
    }
    else{

      this.openLock.on= false
      this.openLock.text= "Lock" 

    }
   
  }

}
