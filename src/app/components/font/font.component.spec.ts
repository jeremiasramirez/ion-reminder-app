import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FontComponent } from './font.component';

describe('FontComponent', () => {
  let component: FontComponent;
  let fixture: ComponentFixture<FontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
