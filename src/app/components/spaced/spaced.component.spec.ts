import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacedComponent } from './spaced.component';

describe('SpacedComponent', () => {
  let component: SpacedComponent;
  let fixture: ComponentFixture<SpacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
