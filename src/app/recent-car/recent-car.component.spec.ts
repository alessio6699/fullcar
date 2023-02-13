import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCarComponent } from './recent-car.component';

describe('RecentCarComponent', () => {
  let component: RecentCarComponent;
  let fixture: ComponentFixture<RecentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
