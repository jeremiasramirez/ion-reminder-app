import { Component, OnInit } from '@angular/core';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { modelNotes } from 'src/app/model/model.notes';
import { ServiceNotes } from 'src/app/services/service.notes';
import { FeatureService } from 'src/app/services/service.feature';
import { timer } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
  providers: [
    ServiceCompleted,
    FeatureService
  ]
})
export class CompletePage implements OnInit {
 
  ngOnInit(){}

}
