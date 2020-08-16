import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { Router } from '@angular/router'; 
import { timer, interval } from 'rxjs';
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
  pinOne:number  = null;
  pinTwo:number = null;
  pinThre:number = null;
  pinFour:number = null;

  private passToString :string;

  public openLock  = {
    on:false,
    text:'Lock'
  }

constructor(private lockService:ServiceLock, private router:Router, public guard:LockGuard) {  }
 
 private open(){

 
    this.guard.opn=true
    this.openLock.on= true
    this.openLock.text= "Unlock" 
    history.replaceState(null, "Reminder","/home/notes")
    this.router.navigate(["home/notes"])
  
    
  }

  private resetPin(){
    this.pinOne  = null;
    this.pinTwo = null;
    this.pinThre = null;
    this.pinFour = null;
    this.passToString = null
  }
  private unlock(){
   
    if(this.lockService.getPassword()[0].pass==this.passToString) timer(200).subscribe(()=>this.open())
    else timer(200).subscribe(()=>this.resetPin())
    
  }
  private verified(num:number){
 

    if(!this.pinOne){
      this.pinOne = num;
    }
    else if(!this.pinTwo){
      this.pinTwo  = num;
    }
    else if(!this.pinThre){
      this.pinThre  = num;
    }
    else if(!this.pinFour){
      this.pinFour  = num;
      
      this.passToString = this.pinOne+""+this.pinTwo+""+this.pinThre+""+this.pinFour
      this.unlock()
    }
    
   
    
    


  }
  private one(e:any){

    this.verified(parseInt(e.target.textContent));

  }
  private two(e:any){  
    this.verified(parseInt(e.target.textContent));

   }
  private thre(e:any){ 
    this.verified(parseInt(e.target.textContent));

    }
  private four(e:any){  
    this.verified(parseInt(e.target.textContent));

   }
  private five(e:any){  
    this.verified(parseInt(e.target.textContent));
     
   }
  private six(e:any){ 
    this.verified(parseInt(e.target.textContent));
     
   }
  private seven(e:any){ 
    this.verified(parseInt(e.target.textContent));
     
   }
  private eight(e:any){ 
    this.verified(parseInt(e.target.textContent));

    }
  private nine(e:any){ 
    this.verified(parseInt(e.target.textContent));
     
   }
  private zero(e:any){ 
    this.verified(e.target.textContent);
    
   }


}
