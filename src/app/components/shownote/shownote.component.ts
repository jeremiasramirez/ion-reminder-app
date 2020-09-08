import { Component,  Input } from '@angular/core'; 
import { ModalController, PopoverController } from '@ionic/angular';
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { SizesComponent } from '../sizes/sizes.component';
import { FontComponent } from '../font/font.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { AlignmentComponent } from '../alignment/alignment.component';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.scss']
})
export class ShownoteComponent  {

  @Input() data: modelNotes;
  @Input() posEl:number;
  private showToolbar:boolean=false;
  private valueSizeFont:number=15;
  private valueFontFamily: string="arial"
  private valueColor:string="dark"
  private valueFontBold:number=400;
  private valueFontItalic:string="normal"
  private valueAligment:string = "normal"

  constructor(
    private popoverSize:PopoverController,
    private serv:ServiceNotes,
    private font:PopoverController,
    private alignsPopover:PopoverController,
    private colorFont:PopoverController,
    private closeModalOpn:ModalController) { 
  }

  private openFontBold(){
    if(this.valueFontBold==400) this.valueFontBold=600
    else this.valueFontBold=400
  }

  private openFontItalic(){
    if (this.valueFontItalic=="normal") this.valueFontItalic="italic"
    else this.valueFontItalic="normal"
  }

  private toolbar(){
    if(this.showToolbar) this.showToolbar=false
    else this.showToolbar=true
  }

 private async saveChange(){
    this.serv.updateItem_(this.posEl, this.data)
    
  }
  private async closeMod(){
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

  

  private async openAlignment(ev:any){
    const aligns = await this.alignsPopover.create({
      component: AlignmentComponent,
      mode:"ios",
      event:ev
    })
    aligns.present()

    this.valueAligment=( await (aligns.onDidDismiss())).data.data
  }

 private async openFont(ev:any){
    const font = await this.font.create({
      component: FontComponent,
      mode:"ios",
      event:ev
    })
    font.present()

    this.valueFontFamily=( await (font.onDidDismiss())).data.data
  }

 private async openColor(ev:any){
    const colors = await this.colorFont.create({
      component: ColorPaletteComponent,
      mode:"ios",
      event:ev
    })
    colors.present()

    this.valueColor= (await colors.onDidDismiss()).data.colorToNote  
  }
}
