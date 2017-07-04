import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A2AboutComponent } from './a2-about.component';

describe('A2AboutComponent', () => {
  let component: A2AboutComponent;
  let fixture: ComponentFixture<A2AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
