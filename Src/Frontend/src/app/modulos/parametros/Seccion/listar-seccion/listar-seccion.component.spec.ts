import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeccionComponent } from './listar-seccion.component';

describe('ListarSeccionComponent', () => {
  let component: ListarSeccionComponent;
  let fixture: ComponentFixture<ListarSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
