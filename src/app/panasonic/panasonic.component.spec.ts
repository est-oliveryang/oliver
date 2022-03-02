import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanasonicComponent } from './panasonic.component';

describe('PanasonicComponent', () => {
  let component: PanasonicComponent;
  let fixture: ComponentFixture<PanasonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanasonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanasonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
