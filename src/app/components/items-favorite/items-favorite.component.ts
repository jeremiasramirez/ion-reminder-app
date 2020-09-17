import { Component, Input, OnInit } from '@angular/core';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { ServiceFavorite } from 'src/app/services/service.favorite';

@Component({
  selector: 'app-items-favorite',
  templateUrl: './items-favorite.component.html',
  styleUrls: ['./items-favorite.component.scss'],
  providers: [
    ServiceFavorite,
    ServiceCompleted
  ]
})
export class ItemsFavoriteComponent implements OnInit {
  @Input() showSkeleton:boolean;
  @Input() notesFav;
  
  constructor(private service:ServiceFavorite,private serviceCompl:ServiceCompleted) { }

  ngOnInit() {
  
  }


  private deleteItem(note:modelNotes,pos:number){
  
    this.serviceCompl.addNewComplete(note); 
    this.service.deleteItem(pos)
    this.notesFav.splice(pos,1)
  } 

}
