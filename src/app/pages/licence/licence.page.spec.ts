import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicencePage } from './licence.page';

describe('LicencePage', () => {
  let component: LicencePage;
  let fixture: ComponentFixture<LicencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
