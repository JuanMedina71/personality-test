import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VARKComponent } from './vark.component';

describe('VARKComponent', () => {
  let component: VARKComponent;
  let fixture: ComponentFixture<VARKComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VARKComponent]
    });
    fixture = TestBed.createComponent(VARKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
