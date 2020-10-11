import { NgModule } from '@angular/core';
import  {  CommonModule} from "@angular/common"
import { SettingHeaderComponent } from './setting-header/setting-header.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component';
import { LicenceInfoComponent } from './licence-info/licence-info.component';
import { FontComponent } from './font/font.component';
import { SizesComponent } from './sizes/sizes.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { SpacedComponent } from './spaced/spaced.component';

 
@NgModule({
  imports:[
    CommonModule
  ],  
  declarations: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent,
    FontComponent,
    SizesComponent,
    ColorPaletteComponent,
    AlignmentComponent,
    SpacedComponent

  ],
  exports: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent,
    FontComponent,
    SizesComponent,
    ColorPaletteComponent,
    AlignmentComponent,
    SpacedComponent
  ] 
 
})
export class ComponentModule {}
