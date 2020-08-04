import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShownoteComponent } from './shownote.component';

describe('ShownoteComponent', () => {
  let component: ShownoteComponent;
  let fixture: ComponentFixture<ShownoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownoteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShownoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
