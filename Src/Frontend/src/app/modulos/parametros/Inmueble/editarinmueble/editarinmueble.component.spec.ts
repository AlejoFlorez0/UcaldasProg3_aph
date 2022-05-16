import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinmuebleComponent } from './editarinmueble.component';

describe('EditarinmuebleComponent', () => {
  let component: EditarinmuebleComponent;
  let fixture: ComponentFixture<EditarinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarinmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
