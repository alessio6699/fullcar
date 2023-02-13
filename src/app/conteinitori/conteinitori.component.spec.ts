import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinitoriComponent } from './conteinitori.component';

describe('ConteinitoriComponent', () => {
  let component: ConteinitoriComponent;
  let fixture: ComponentFixture<ConteinitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteinitoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteinitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
