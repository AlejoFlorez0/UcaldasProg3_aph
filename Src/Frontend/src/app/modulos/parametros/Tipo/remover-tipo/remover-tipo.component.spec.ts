import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverTipoComponent } from './remover-tipo.component';

describe('RemoverTipoComponent', () => {
  let component: RemoverTipoComponent;
  let fixture: ComponentFixture<RemoverTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
