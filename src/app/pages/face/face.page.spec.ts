import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacePage } from './face.page';

describe('FacePage', () => {
  let component: FacePage;
  let fixture: ComponentFixture<FacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
