import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverRolComponent } from './remover-rol.component';

describe('RemoverRolComponent', () => {
  let component: RemoverRolComponent;
  let fixture: ComponentFixture<RemoverRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
