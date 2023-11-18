import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarkComponent } from './vark.component';

describe('VarkComponent', () => {
  let component: VarkComponent;
  let fixture: ComponentFixture<VarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VarkComponent]
    });
    fixture = TestBed.createComponent(VarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
