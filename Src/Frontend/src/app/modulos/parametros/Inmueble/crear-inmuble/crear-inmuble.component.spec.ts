import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInmubleComponent } from './crear-inmuble.component';

describe('CrearInmubleComponent', () => {
  let component: CrearInmubleComponent;
  let fixture: ComponentFixture<CrearInmubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInmubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInmubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
