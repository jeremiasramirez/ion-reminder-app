import { Injectable } from "@angular/core"
import { ToastController} from "@ionic/angular"
@Injectable()

export class FeatureService{

    constructor(public toast:ToastController){



    }

    async createToast(header:any,text:any,color:string){
        const toast = await this.toast.create({
            header: header,
            message: text,
            duration: 2000,
            mode: "ios",
            color: color,
            buttons:[
                {text: "OK", handler: ()=>{ toast.dismiss() }}
            ]
        })
        toast.present()
    }


}