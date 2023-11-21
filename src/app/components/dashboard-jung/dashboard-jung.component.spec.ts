import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJungComponent } from './dashboard-jung.component';

describe('DashboardJungComponent', () => {
  let component: DashboardJungComponent;
  let fixture: ComponentFixture<DashboardJungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardJungComponent]
    });
    fixture = TestBed.createComponent(DashboardJungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
