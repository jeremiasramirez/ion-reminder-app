import { Component, OnInit } from '@angular/core';
import { ServiceLock } from 'src/app/services/service.lock';
import { timer } from 'rxjs';
import { ServiceCompleted } from 'src/app/services/service.completed';

@Component({
  selector: 'app-analize',
  templateUrl: './analize.page.html',
  styleUrls: ['./analize.page.scss'],
  providers:[
    ServiceLock,
    ServiceCompleted
  ]
})
export class AnalizePage implements OnInit {
  public cleanImg = {
    success: '../../../assets/img-clean/speed.start.svg',
    title: "Analizando",
    activatedButton: true, 
    spinner: true,
    note:0,
    trash:0
  }

  constructor(public locks:ServiceLock, public rem:ServiceCompleted) { }

  ngOnInit() {

    timer(4000).subscribe(()=>{

      this.cleanImg.spinner = false;
      this.cleanImg.title = "Analizado"
      this.cleanImg.activatedButton = false
      this.cleanImg.trash=this.rem.getAll().length

    })

  }

  cleaning(){

    this.cleanImg.title = "Limpiando";
    this.cleanImg.success = "../../../assets/img-clean/cleanin.svg";
    this.cleanImg.activatedButton = true
    this.cleanImg.spinner = true;

    timer(2500).subscribe(()=>{
      this.cleanImg.spinner = false;
      this.cleanImg.title = "Terminado"
      this.cleanImg.success= "../../../assets/img-clean/complete.svg"
      this.cleanImg.activatedButton = true
      this.cleanImg.trash =  0
      this.cleanImg.note =  0
    })

  }

  clean_(){

  }

  clean(){
    this.cleaning()
    /*
    if (this.locks.existPassword()===true){
      console.log("no se puede, HAY PASSWORD!")
    }
     */

  }



}
