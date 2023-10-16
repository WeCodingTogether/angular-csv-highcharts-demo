import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoHeamapComponent } from './kendo-heamap.component';

describe('KendoHeamapComponent', () => {
  let component: KendoHeamapComponent;
  let fixture: ComponentFixture<KendoHeamapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KendoHeamapComponent]
    });
    fixture = TestBed.createComponent(KendoHeamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
