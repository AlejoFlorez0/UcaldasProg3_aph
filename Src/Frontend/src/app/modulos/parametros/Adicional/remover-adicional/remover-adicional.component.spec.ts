import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverAdicionalComponent } from './remover-adicional.component';

describe('RemoverAdicionalComponent', () => {
  let component: RemoverAdicionalComponent;
  let fixture: ComponentFixture<RemoverAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverAdicionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
