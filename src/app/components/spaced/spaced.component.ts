import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-spaced',
  templateUrl: './spaced.component.html',
  styleUrls: ['./spaced.component.scss'],
})
export class SpacedComponent implements OnInit {


  private spacesAvailable = [
   
    {name: 'letter14', value:14},
    {name: 'letter16', value:16},
    {name: 'letter18', value:18},
    {name: 'letter20', value:20},
    {name: 'letter22', value:22},
    {name: 'letter24', value:24},
    {name: 'letter27', value:27},
    {name: 'letter30', value:30},
    {name: 'letter32', value:32}
  ]
  constructor(
    private closeSize:PopoverController
  ) { }

  ngOnInit() {}
  
  private async spaceds(e:number){
     
    this.closeSize.dismiss({data:e});
  }


}
