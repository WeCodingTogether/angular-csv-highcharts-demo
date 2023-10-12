import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNumberHeatmapComponent } from './total-number-heatmap.component';

describe('TotalNumberHeatmapComponent', () => {
  let component: TotalNumberHeatmapComponent;
  let fixture: ComponentFixture<TotalNumberHeatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalNumberHeatmapComponent]
    });
    fixture = TestBed.createComponent(TotalNumberHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
