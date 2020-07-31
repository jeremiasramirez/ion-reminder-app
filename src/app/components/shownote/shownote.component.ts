import { Component, OnInit, Input } from '@angular/core';
import { modelNotes } from 'src/app/services/notes.model';
import { ModalController } from '@ionic/angular';
import { ServiceNotes } from 'src/app/services/service.notes';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent implements OnInit {

  @Input() data: modelNotes;
  @Input() posEl:number;
  constructor(public serv:ServiceNotes,public closeModalOpn:ModalController) { 

  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.posEl);
  }

  async saveChange(){
    this.serv.updateItem_(this.posEl, this.data)
    this.closeModalOpn.dismiss()

  }

}
