import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogojComponent } from './catalogoj.component';

describe('CatalogojComponent', () => {
  let component: CatalogojComponent;
  let fixture: ComponentFixture<CatalogojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogojComponent]
    });
    fixture = TestBed.createComponent(CatalogojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
