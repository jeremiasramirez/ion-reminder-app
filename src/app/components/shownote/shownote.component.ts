import { Component,  Input } from '@angular/core'; 
import { ModalController, PopoverController } from '@ionic/angular';
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { SizesComponent } from '../sizes/sizes.component';
import { FontComponent } from '../font/font.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent  {

  @Input() data: modelNotes;
  @Input() posEl:number;
  private showToolbar:boolean=false;
  private valueSizeFont:number=12;
  private valueFontFamily: string="arial"
  private valueColor:string="dark"

  constructor(
    private popoverSize:PopoverController,
    private serv:ServiceNotes,
    private font:PopoverController,
    private colorFont:PopoverController,
    private closeModalOpn:ModalController) { 
  }

  private toolbar(){
    if(this.showToolbar) this.showToolbar=false
    else this.showToolbar=true
  }

  async saveChange(){
    this.serv.updateItem_(this.posEl, this.data)
    
  }
  async closeMod(){
    this.closeModalOpn.dismiss()
  }

  private async openSize(ev:any){
    const size = await this.popoverSize.create({
      component: SizesComponent,
      mode:"ios",
      event: ev
    })
 
    size.present();

    this.valueSizeFont=( await (size.onDidDismiss())).data.data
   
  }


  async openFont(ev:any){
    const font = await this.font.create({
      component: FontComponent,
      mode:"ios",
      event:ev
    })
    font.present()

    this.valueFontFamily=( await (font.onDidDismiss())).data.data
  }

  async openColor(ev:any){
    const colors = await this.colorFont.create({
      component: ColorPaletteComponent,
      mode:"ios",
      event:ev
    })
    colors.present()

    this.valueColor= (await colors.onDidDismiss()).data.colorToNote  
  }
}
