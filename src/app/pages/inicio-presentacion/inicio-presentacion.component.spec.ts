import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPresentacionComponent } from './inicio-presentacion.component';

describe('InicioPresentacionComponent', () => {
  let component: InicioPresentacionComponent;
  let fixture: ComponentFixture<InicioPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
