import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlosarioPage } from './glosario.page';

describe('GlosarioPage', () => {
  let component: GlosarioPage;
  let fixture: ComponentFixture<GlosarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlosarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
