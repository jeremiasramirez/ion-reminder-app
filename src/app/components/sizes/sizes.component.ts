import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss'],
})
export class SizesComponent implements OnInit {
  
  private sizes = [
    {name: 'eight', value:8},
    {name: 'ten', value:10},
    {name: 'twelve', value:12},
    {name: 'fourtheen', value:14},
    {name: 'sixteen', value:16},
    {name: 'eighteen', value:18},
    {name: 'twenty', value:20}
  ]
  constructor(
    private closeSize:PopoverController
  ) { }

  ngOnInit() {}
  
  private async focus(e:number){
     
    this.closeSize.dismiss({data:e});
  }


}
