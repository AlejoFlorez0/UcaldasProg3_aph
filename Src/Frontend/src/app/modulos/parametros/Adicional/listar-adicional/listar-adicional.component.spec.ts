import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdicionalComponent } from './listar-adicional.component';

describe('ListarAdicionalComponent', () => {
  let component: ListarAdicionalComponent;
  let fixture: ComponentFixture<ListarAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAdicionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
