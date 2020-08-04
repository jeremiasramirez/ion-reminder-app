import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NoteComponent } from "../../components/note/note.component"
import { NotesPage } from './notes.page';
 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule
  ],
  declarations: [
    NotesPage,
    NoteComponent,
    SearchPipe,
    ShownoteComponent
  ]
})
export class NotesPageModule {}
