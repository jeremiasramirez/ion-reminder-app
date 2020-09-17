import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-header',
  templateUrl: './setting-header.component.html',
  styleUrls: ['./setting-header.component.scss'],
})
export class SettingHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() routing: string="/home/settings" ;
  @Input() colorHeader: string = "tertiary";

  constructor(public router:Router) { }

  ngOnInit() {}
 
  private returnBack(route:any){
    this.router.navigate([route])
  }
  
}
