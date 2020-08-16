import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-header',
  templateUrl: './setting-header.component.html',
  styleUrls: ['./setting-header.component.scss'],
})
export class SettingHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() color: string = "light";
  constructor(public router:Router) { }

  ngOnInit() {}
  back(){
    this.router.navigate(["/home/settings"])
  }
}
