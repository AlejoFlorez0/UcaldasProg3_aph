import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleArchivoCsvComponent } from './inmueble-archivo-csv.component';

describe('InmuebleArchivoCsvComponent', () => {
  let component: InmuebleArchivoCsvComponent;
  let fixture: ComponentFixture<InmuebleArchivoCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleArchivoCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleArchivoCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
