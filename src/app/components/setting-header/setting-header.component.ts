import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setting-header',
  templateUrl: './setting-header.component.html',
  styleUrls: ['./setting-header.component.scss'],
})
export class SettingHeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {}

}
