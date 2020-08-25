import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(  private status:StatusBar) { 
    this.status.backgroundColorByHexString('#5260ff');
  }

  ngOnInit() {
  }

}


let settings =  [

  {
    name: "Pin",
    subname: "Agregar, Eliminar",
    router:"/home/settings/lock",
    icon: "lock-closed"
  },
  {
    name: "Vacear notas",
    subname: "Analizar, Vacear papelera",
    router:"/home/settings/analize",
    icon: "speedometer"
  },
  {
    name: "Notificación",
    subname: "Activar, Preferencias de notificaciones",
    router:"/home/settings/notification",
    icon: "notifications"
  },
  {
    name: "Plan",
    subname: "Basic, Premium",
    router:"/home/settings/plan",
    icon: "flash"
  },

  {
    name: "Reportar",
    subname: " Fallos, Agregar mejoras",
    router:"/home/settings/report",
    icon: "notifications"
  },

  {
    name: "Licence",
    subname: "Información legal",
    router:"/home/settings/licence",
    icon: "document-outline"
  },
  {
    name: "Glosario de iconos",
    subname: "",
    router:"/home/settings/glosario",
    icon: "clipboard-outline"
  },
  {
    name: "Mi phone",
    subname: "Información, versión",
    router:"/home/settings/phone",
    icon: "hardware-chip"
  }
  
]
  
let settingsClick =[
  {
    name: "Tema",
    subname: "Dark, Light",
    func:"changeTheme()",
    icon: "moon"
  },

  {
    name: "Resetear ajustes",
    subname: "Tema, Notificaciones, Pin",
    func:"resetSettings()",
    icon: "reload"
  }
]
