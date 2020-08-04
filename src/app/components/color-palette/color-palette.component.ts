import { Component, OnInit, Input } from '@angular/core'; 
import { PopoverController } from '@ionic/angular'; 
 

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent   {
  @Input() color:any="medium";
 

  public colors:any;

  constructor( public popoverClose:PopoverController) {
       this.getItemColors().then((colrs)=>{
         this.colors = colrs;
       })
  }
 
  async getItemColors(){

    return new Promise((resolve,rejected)=>{
        resolve([{name: 'tertiary', colorName: 'Azúl'},
        {name: 'success', colorName: 'Limón'},
        {name: 'warning', colorName: 'Favorito'},
        {name: 'danger', colorName: 'Manzana'},
        {name: 'medium', colorName: 'Grey'},
        {name: 'dark', colorName: 'Oscuro'},
        {name: 'light', colorName: 'Claro'},
        {name: 'secondary', colorName: 'Cielo'}])
    })
   


  }
  async sendColorToNote(color:any="medium"){

    this.popoverClose.dismiss({colorToNote:color})
  }
 

}
