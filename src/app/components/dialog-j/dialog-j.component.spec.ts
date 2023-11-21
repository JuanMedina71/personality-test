import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJComponent } from './dialog-j.component';

describe('DialogJComponent', () => {
  let component: DialogJComponent;
  let fixture: ComponentFixture<DialogJComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogJComponent]
    });
    fixture = TestBed.createComponent(DialogJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
