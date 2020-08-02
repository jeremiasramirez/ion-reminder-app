import { Component,  Input } from '@angular/core'; 
import { ModalController } from '@ionic/angular';
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent  {

  @Input() data: modelNotes;
  @Input() posEl:number;
  constructor(public serv:ServiceNotes,public closeModalOpn:ModalController) { 

  }

 

  async saveChange(){
    this.serv.updateItem_(this.posEl, this.data)
    
  }
  async closeMod(){
    this.closeModalOpn.dismiss()
  }

}
