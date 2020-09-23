import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ServiceNotes,modelNotes } from 'src/app/services/service.notes';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { timer } from 'rxjs';
import { ServiceCompleted } from 'src/app/services/service.completed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [
    ServiceCompleted
  ]
})
export class NoteComponent implements OnInit {
  
  constructor(
    private popoverColor:PopoverController,
    private compl:ServiceCompleted,
    private router:Router,
    private serv:ServiceNotes,
    private categorieModal:ModalController,
    private modalCloseAdd:ModalController) { }
   
  private itemAdd  = {
    id:0,
    title: '',
    date: new Date(),
    description: null,
    color: 'medium',
    categorie: "Sin categoría",
    size:  15,
    font:"arial",
    colorFont:"dark",
    fontBold:400,
    italic:"normal",
    alignment: "normal",
    spaced:17

  };
  private categorie: string;
  private categories:any;
  public colorPred:string = "success"

  ngOnInit() {
    this.categories = this.serv.getCategories()
  }

  private openCategories(){
    this.categories = this.serv.getCategories()
  }
  async closeModalAdd(){
    timer(100).subscribe(()=>this.modalCloseAdd.dismiss())
  }

  private createNew(){
   
    if (this.itemAdd.title  !== ''){
      
       this.serv.addNew(this.itemAdd)
        
      timer(100).subscribe(()=>{
        this.closeModalAdd()
        this.router.navigate(["home/notes"])
        
      })

    }

  }

  async openColorPalette(color:MouseEvent){
     
    
     const popColor = await this.popoverColor.create({
      component: ColorPaletteComponent,
      componentProps: {color: color},
      mode:"ios",
      event: color
    })

    popColor.present();
    this.colorPred= (await popColor.onDidDismiss()).data.colorToNote  
    this.itemAdd.color = this.colorPred 
  }


  async newCategorie(){
    
    const cat = await this.categorieModal.create({
      component: CategoriesComponent
    })
    cat.present()
  }

}
