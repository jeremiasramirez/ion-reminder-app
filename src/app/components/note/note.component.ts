import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modelNotes } from 'src/app/services/notes.model';
import { ServiceNotes } from 'src/app/services/service.notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  
  constructor(public serv:ServiceNotes,public modalCloseAdd:ModalController) { }
   
  public itemAdd : modelNotes = {
    id:0,
    title: '',
    date: new Date(),
    description: null
  };

  ngOnInit() {}

  async closeModalAdd(){
    this.modalCloseAdd.dismiss()
  }

  createNew(){

    if (this.itemAdd.title  !== ''){
        console.log(this.itemAdd)
      this.serv.addNew(this.itemAdd)
      this.closeModalAdd()

    }

  }

}
