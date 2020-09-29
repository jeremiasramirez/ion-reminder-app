import { Component, OnInit } from '@angular/core';
import { modelNotes } from 'src/app/model/model.notes';
import { FeatureService } from 'src/app/services/service.feature';
import { timer } from 'rxjs';
import { ServiceFavorite } from 'src/app/services/service.favorite';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
  providers: [
    ServiceFavorite,
    FeatureService
  ]
})
export class CompletePage implements OnInit {
  private showSkeleton:boolean;
  private notesFav:modelNotes[]= [];
  constructor(private service:ServiceFavorite){  }

  ngOnInit(){
    this.getFavoriteNotes();
  }

  private async getFavoriteNotes(){
    timer(800).subscribe(()=>{
      this.showSkeleton=true;
      this.notesFav=this.service.favorite;
    })
  } 

}
