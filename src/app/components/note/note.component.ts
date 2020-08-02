import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
 
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  
  constructor(public popoverColor:PopoverController,
    public serv:ServiceNotes,public modalCloseAdd:ModalController) { }
   
  public itemAdd  = {
    id:0,
    title: '',
    date: new Date(),
    description: null,
    color: 'medium'
  };

  public colorPred:string = "medium"

  ngOnInit() {}

  async closeModalAdd(){
    timer(200).subscribe(()=>this.modalCloseAdd.dismiss())
  }

  createNew(){

    if (this.itemAdd.title  !== ''){
      
      this.serv.addNew(this.itemAdd)
      timer(500).subscribe(()=>this.closeModalAdd())

    }

  }

  async openColorPalette(color:MouseEvent){
     
    
     const popColor = await this.popoverColor.create({
      component: ColorPaletteComponent,
      componentProps: {color: color},
      mode:"ios",
      event: color
    })

    popColor.present();
    this.colorPred= (await popColor.onDidDismiss()).data.colorToNote  
    this.itemAdd.color = this.colorPred 
  }

}
