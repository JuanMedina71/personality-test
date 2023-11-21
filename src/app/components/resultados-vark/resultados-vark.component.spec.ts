import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosVarkComponent } from './resultados-vark.component';

describe('ResultadosVarkComponent', () => {
  let component: ResultadosVarkComponent;
  let fixture: ComponentFixture<ResultadosVarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosVarkComponent]
    });
    fixture = TestBed.createComponent(ResultadosVarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
