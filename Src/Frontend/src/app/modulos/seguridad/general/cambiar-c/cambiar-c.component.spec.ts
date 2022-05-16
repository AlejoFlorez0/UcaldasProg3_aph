import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarCComponent } from './cambiar-c.component';

describe('CambiarCComponent', () => {
  let component: CambiarCComponent;
  let fixture: ComponentFixture<CambiarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
