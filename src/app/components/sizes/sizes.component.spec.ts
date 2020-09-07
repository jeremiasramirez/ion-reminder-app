import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SizesComponent } from './sizes.component';

describe('SizesComponent', () => {
  let component: SizesComponent;
  let fixture: ComponentFixture<SizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
