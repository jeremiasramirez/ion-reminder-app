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
  private valueCategorie:string;

  constructor(
    private modal:ModalController,
    private service:ServiceNotes)  { }
    
  ngOnInit() {
    
    this.categories= this.service.getCategories()
     
  }
 
  closeModal(){
    this.modal.dismiss()
  }


  add(data:any){
    
    if (data.length >= 2){ 
       
      this.categories.unshift({name:data})
       
      this.service.setCategories(this.categories)
     
    }
  }


  removeCateg(pos:number){
    if (this.categories.length > 1){
      this.categories.splice(pos,1)
      this.service.setCategories(this.categories)
    }
  }
}
