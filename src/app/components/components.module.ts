import { NgModule } from '@angular/core';
import  {  CommonModule} from "@angular/common"
import { SettingHeaderComponent } from './setting-header/setting-header.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component';
import { NoteComponent } from './note/note.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShownoteComponent } from './shownote/shownote.component';
import { LicenceInfoComponent } from './licence-info/licence-info.component';
import { FontComponent } from './font/font.component';
import { SizesComponent } from './sizes/sizes.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
 
@NgModule({
  imports:[
    CommonModule
  ],  
  declarations: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent,
    FontComponent,
    SizesComponent,ColorPaletteComponent
  ],
  exports: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent,
    FontComponent,
    SizesComponent,ColorPaletteComponent
  ] 
 
})
export class ComponentModule {}
