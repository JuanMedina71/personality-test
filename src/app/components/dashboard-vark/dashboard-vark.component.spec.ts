import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVarkComponent } from './dashboard-vark.component';

describe('DashboardVarkComponent', () => {
  let component: DashboardVarkComponent;
  let fixture: ComponentFixture<DashboardVarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardVarkComponent]
    });
    fixture = TestBed.createComponent(DashboardVarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
