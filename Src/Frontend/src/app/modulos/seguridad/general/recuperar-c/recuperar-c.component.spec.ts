import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCComponent } from './recuperar-c.component';

describe('RecuperarCComponent', () => {
  let component: RecuperarCComponent;
  let fixture: ComponentFixture<RecuperarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
