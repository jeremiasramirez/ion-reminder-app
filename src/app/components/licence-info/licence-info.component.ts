import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-licence-info',
  templateUrl: './licence-info.component.html',
  styleUrls: ['./licence-info.component.scss'],
})
export class LicenceInfoComponent implements OnInit {
  @Input() permission:any;
  constructor() { }

  ngOnInit() {}

}
