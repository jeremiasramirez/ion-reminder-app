import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NoteComponent } from "../../components/note/note.component"
import { NotesPage } from './notes.page';
 
import { ShownoteComponent } from 'src/app/components/shownote/shownote.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SkeletonModule } from 'src/app/components/skeleton/skeleton.module';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule,
   // ComponentModule,
    PipesModule,
    SkeletonModule
  ],
  declarations: [
    NotesPage,
    NoteComponent, 
    CategoriesComponent,
    ShownoteComponent
  ]
})
export class NotesPageModule {}
