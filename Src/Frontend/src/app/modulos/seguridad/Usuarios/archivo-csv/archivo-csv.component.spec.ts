import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoCsvComponent } from './archivo-csv.component';

describe('ArchivoCsvComponent', () => {
  let component: ArchivoCsvComponent;
  let fixture: ComponentFixture<ArchivoCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivoCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
