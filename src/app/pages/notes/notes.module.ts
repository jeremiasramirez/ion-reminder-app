import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NoteComponent } from "../../components/note/note.component"
import { NotesPage } from './notes.page';
 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';

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
    ShownoteComponent
  ]
})
export class NotesPageModule {}
