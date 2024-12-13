import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBgComponent } from './color-bg.component';

describe('ColorBgComponent', () => {
  let component: ColorBgComponent;
  let fixture: ComponentFixture<ColorBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorBgComponent]
    });
    fixture = TestBed.createComponent(ColorBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
