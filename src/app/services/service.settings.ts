 
export const settings =  [

    {
     title: "Pin",
      subname: "Agregar, Eliminar",
      router:"/home/settings/lock",
      icon: "lock-closed"
    },
    {
     title: "Vacear notas",
      subname: "Analizar, Vacear papelera",
      router:"/home/settings/analize",
      icon: "speedometer"
    },
    {
     title: "Notificación",
      subname: "Activar, Preferencias de notificaciones",
      router:"/home/settings/notification",
      icon: "notifications"
    },
    {
     title: "Plan",
      subname: "Basic, Premium",
      router:"/home/settings/plan",
      icon: "flash"
    },
  
    {
     title: "Help",
      subname: "Ayuda, Encuentra cualquier duda acerca de Reminder",
      router:"/home/settings/help",
      icon: "help-outline"
    },
  
    {
     title: "Reportar",
      subname: " Fallos, Agregar mejoras",
      router:"/home/settings/report",
      icon: "chatbubble"
    },
  
    {
     title: "Licence",
      subname: "Información legal",
      router:"/home/settings/licence",
      icon: "code-download"
    },
    {
     title: "Glosario de iconos",
      subname: "",
      router:"/home/settings/glosario",
      icon: "clipboard"
    },
    {
     title: "Mi phone",
      subname: "Información, versión",
      router:"/home/settings/phone",
      icon: "hardware-chip"
    }
    
  ]
    
  export const settingsClick =[
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
  