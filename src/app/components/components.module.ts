import { NgModule } from '@angular/core';
import  {  CommonModule} from "@angular/common"
import { SettingHeaderComponent } from './setting-header/setting-header.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component';
import { NoteComponent } from './note/note.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShownoteComponent } from './shownote/shownote.component';
import { LicenceInfoComponent } from './licence-info/licence-info.component';
 
@NgModule({
  imports:[
    CommonModule
  ],  
  declarations: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent
  ],
  exports: [
    SettingHeaderComponent,
    PhoneInfoComponent,
    LicenceInfoComponent
  ] 
 
})
export class ComponentModule {}
