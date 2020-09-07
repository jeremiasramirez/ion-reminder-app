import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() show:boolean;
  constructor() { }

  ngOnInit() {}

}
