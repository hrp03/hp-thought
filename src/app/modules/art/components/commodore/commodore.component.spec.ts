import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodoreComponent } from './commodore.component';

describe('MandalaComponent', () => {
  let component: CommodoreComponent;
  let fixture: ComponentFixture<CommodoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
