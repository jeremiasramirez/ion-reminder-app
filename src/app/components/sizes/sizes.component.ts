import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss'],
})
export class SizesComponent implements OnInit {
  
  private sizes = [
    {name: 'letter8', value:8},
    {name: 'letter10', value:10},
    {name: 'letter12', value:12},
    {name: 'letter14', value:14},
    {name: 'letter16', value:16},
    {name: 'letter18', value:18},
    {name: 'letter20', value:20},
    {name: 'letter22', value:22}
  ]
  constructor(
    private closeSize:PopoverController
  ) { }

  ngOnInit() {}
  
  private async focus(e:number){
     
    this.closeSize.dismiss({data:e});
  }


}
