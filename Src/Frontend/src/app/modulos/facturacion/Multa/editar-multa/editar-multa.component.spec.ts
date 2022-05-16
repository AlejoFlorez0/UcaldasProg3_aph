import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMultaComponent } from './editar-multa.component';

describe('EditarMultaComponent', () => {
  let component: EditarMultaComponent;
  let fixture: ComponentFixture<EditarMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
