import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReomverInmuebleComponent } from './reomver-inmueble.component';

describe('ReomverInmuebleComponent', () => {
  let component: ReomverInmuebleComponent;
  let fixture: ComponentFixture<ReomverInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReomverInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReomverInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
