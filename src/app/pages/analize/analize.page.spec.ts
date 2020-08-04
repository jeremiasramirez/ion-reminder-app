import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnalizePage } from './analize.page';

describe('AnalizePage', () => {
  let component: AnalizePage;
  let fixture: ComponentFixture<AnalizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
