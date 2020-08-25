import { Component, OnInit } from '@angular/core';
import { ServiceNotes } from 'src/app/services/service.notes';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  private categories:any;
  private valueCategorie:string|number="";

  constructor(
    private modal:ModalController,
    private service:ServiceNotes)  { }

  ngOnInit() {
    this.categories= this.service.getCategories()
  }
 
  closeModal(){
    this.modal.dismiss()
  }


  add(){
    if (this.valueCategorie != ""){ 
       
      this.categories.unshift({name:this.valueCategorie})
      timer(1000).subscribe(()=>this.valueCategorie = null)
      this.service.setCategories(this.categories)

    }
  }


  removeCateg(pos:number){
    this.categories.splice(pos,1)
    this.service.setCategories(this.categories)
  }
}
