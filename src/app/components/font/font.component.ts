import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class FontComponent implements OnInit {
   fonts = [
    {name: 'Arial', test:'arial'},
    {name: 'Sans-Serif', test:'sans-serif'},
    {name: 'Times', test:'Times'},
    {name: 'Times New Roman', test:'Times New Roman'},
    {name: 'Serif', test:'serif'},
    {name: 'Helvetica', test:'Helvetica'},
    {name: 'Impact', test:'Impact'},
    {name: 'Arial Narrow Bold', test:'Arial Narrow Bold'},
    {name: 'Haettenschweiler', test:'Haettenschweiler'}
    
  ]
  constructor(
    private closeFont:PopoverController
  ) { }

  ngOnInit() {}

  private changeFont(ev:string){
    this.closeFont.dismiss({data:ev})
  }

}
