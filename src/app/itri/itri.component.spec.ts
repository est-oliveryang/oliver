import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItriComponent } from './itri.component';

describe('ItriComponent', () => {
  let component: ItriComponent;
  let fixture: ComponentFixture<ItriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
