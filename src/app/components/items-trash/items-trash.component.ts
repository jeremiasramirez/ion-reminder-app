import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-trash',
  templateUrl: './items-trash.component.html',
  styleUrls: ['./items-trash.component.scss'],
})
export class ItemsTrashComponent implements OnInit {
  @Input() show:boolean;
 
  constructor() { }

  ngOnInit() {}

}
