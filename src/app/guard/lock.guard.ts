 
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceLock } from '../services/service.lock';

@Injectable({providedIn: 'root'})
export class LockGuard implements CanActivate {
    public opn:boolean=true;
    constructor(private lockServ:ServiceLock, private router:Router) {
        
        if (!sessionStorage.getItem("lock")){
            this.opn = true;
            this.router.navigate(["home/notes"])
        }
        else{
            this.opn=false
            this.router.navigate(["sign"])
        }

     }

    canActivate(   ) {
         return this.opn
         
    }
}