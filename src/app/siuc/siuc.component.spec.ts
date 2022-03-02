import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiucComponent } from './siuc.component';

describe('SiucComponent', () => {
  let component: SiucComponent;
  let fixture: ComponentFixture<SiucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
