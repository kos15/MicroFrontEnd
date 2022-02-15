import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfefedrationComponent } from './mfefedration.component';

describe('MfefedrationComponent', () => {
  let component: MfefedrationComponent;
  let fixture: ComponentFixture<MfefedrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfefedrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfefedrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
