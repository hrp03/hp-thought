import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYourVoiceComponent } from './ring-the-bell.component';

describe('TestYourVoiceComponent', () => {
  let component: TestYourVoiceComponent;
  let fixture: ComponentFixture<TestYourVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestYourVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYourVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
