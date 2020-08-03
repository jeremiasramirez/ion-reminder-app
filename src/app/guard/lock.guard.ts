 
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceLock } from '../services/service.lock';

@Injectable({providedIn: 'root'})
export class LockGuard implements CanActivate {
    public opn:boolean;
    constructor(private lockServ:ServiceLock, private router:Router) {
        
        if (!sessionStorage.getItem("opened")){
            this.opn = false;
            this.router.navigate(["sign"])
        }
        else{
            this.opn=true
            this.router.navigate(["home/notes"])
        }

     }

    canActivate(   ) {
         return this.opn
         
    }
}