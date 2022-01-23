import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMarksheetComponent } from './annual-marksheet.component';

describe('AnnualMarksheetComponent', () => {
  let component: AnnualMarksheetComponent;
  let fixture: ComponentFixture<AnnualMarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualMarksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
