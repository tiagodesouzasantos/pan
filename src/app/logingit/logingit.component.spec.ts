import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingitComponent } from './logingit.component';

describe('LogingitComponent', () => {
  let component: LogingitComponent;
  let fixture: ComponentFixture<LogingitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
