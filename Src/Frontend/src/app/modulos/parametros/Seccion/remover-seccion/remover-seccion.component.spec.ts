import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverSeccionComponent } from './remover-seccion.component';

describe('RemoverSeccionComponent', () => {
  let component: RemoverSeccionComponent;
  let fixture: ComponentFixture<RemoverSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
