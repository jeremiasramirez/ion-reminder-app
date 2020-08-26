import { NgModule } from '@angular/core';
import { SettingHeaderComponent } from './setting-header/setting-header.component';
import { SearchPipe } from '../pipes/search.pipe';
 
@NgModule({
     declarations: [SettingHeaderComponent,SearchPipe],
  exports: [
    SettingHeaderComponent,
    SearchPipe
  ] 
 
})
export class ComponentModule {}
