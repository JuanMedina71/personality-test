import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogovComponent } from './catalogov.component';

describe('CatalogovComponent', () => {
  let component: CatalogovComponent;
  let fixture: ComponentFixture<CatalogovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogovComponent]
    });
    fixture = TestBed.createComponent(CatalogovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
