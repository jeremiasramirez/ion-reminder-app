import { Component, OnInit } from '@angular/core';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { modelNotes } from 'src/app/model/model.notes';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
  providers: [
    ServiceCompleted
  ]
})
export class CompletePage implements OnInit {
  public completeItems:modelNotes[];
  constructor(public completedNot:ServiceCompleted) {

    this.completeItems = this.completedNot.completed
    console.log(this.completeItems);
    
  }

  ngOnInit() {
  }

}
