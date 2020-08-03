import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  public pass = ""
  constructor() { }

  ngOnInit() {
  }
  analizePass(){
    if(this.pass.length === 4 ){
      console.log("tiene 4 digitos")
      if (this.pass === "0847"){
        console.log("acepted")
      }
    }
   
  }

}
