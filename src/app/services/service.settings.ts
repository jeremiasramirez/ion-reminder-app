 
export const settings =  [

    {
     title: "Pin",
      subname: "Agregar, Eliminar",
      router:"/home/settings/lock",
      icon: "lock-closed",
      disabled:false
    },
    {
     title: "Vacear notas",
      subname: "Analizar, Vacear papelera",
      router:"/home/settings/analize",
      icon: "speedometer",
      disabled:false
    },
    {
     title: "Notificación",
      subname: "Activar, Preferencias de notificaciones",
      router:"/home/settings/notification",
      icon: "notifications",
      disabled:true
    },
    {
     title: "Plan",
      subname: "Basic, Premium",
      router:"/home/settings/plan",
      icon: "flash",
      disabled:true
    },
  
    {
     title: "Help",
      subname: "Ayuda, Encuentra cualquier duda acerca de Reminder",
      router:"/home/settings/help",
      icon: "help-outline",
      disabled:false
    },
  
    {
     title: "Reportar",
      subname: " Fallos, Agregar mejoras",
      router:"/home/settings/report",
      icon: "chatbubble",
      disabled:false
    },
  
    {
     title: "Licence",
      subname: "Información legal",
      router:"/home/settings/licence",
      icon: "code-download",
      disabled:false
    },
    {
     title: "Glosario de iconos",
      subname: "",
      router:"/home/settings/glosario",
      icon: "clipboard",
      disabled:true
    },
    {
     title: "Mi phone",
      subname: "Información, versión",
      router:"/home/settings/phone",
      icon: "hardware-chip",
      disabled:false
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
  