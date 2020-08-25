 
export const settings =  [

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
      name: "Help",
      subname: "Ayuda, Que pasa si olvido el PIN",
      router:"/home/settings/help",
      icon: "help-outline"
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
      icon: "document"
    },
    {
      name: "Glosario de iconos",
      subname: "",
      router:"/home/settings/glosario",
      icon: "clipboard"
    },
    {
      name: "Mi phone",
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
  