import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.page.html',
  styleUrls: ['./licence.page.scss'],
})
export class LicencePage implements OnInit {
  public use_ :any;
  
  ngOnInit() {
    this.use_ = uses;
  }

}
const uses= [{ name: "Commercial use", icon: "checkmark" },
      { name: "Modification", icon: "close" },
      { name: "Distribution", icon: "checkmark" },
      { name: "Private use", icon: "checkmark" },
      { name: "Liability", icon: "close" },
      { name: "Trademark use", icon: "close" },
      { name: "Patent use", icon: "close" },
      { name: "Warranty", icon: "close" }
    ]
 
 

 





