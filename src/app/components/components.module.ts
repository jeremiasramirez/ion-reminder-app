import { NgModule } from '@angular/core';
import  {  CommonModule} from "@angular/common"
import { SettingHeaderComponent } from './setting-header/setting-header.component';
import { SearchPipe } from '../pipes/search.pipe';
import { PhoneInfoComponent } from './phone-info/phone-info.component';
 
@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    SettingHeaderComponent,
    SearchPipe,
    PhoneInfoComponent
  ],
  exports: [
    SettingHeaderComponent,
    SearchPipe,
    PhoneInfoComponent
  ] 
 
})
export class ComponentModule {}
