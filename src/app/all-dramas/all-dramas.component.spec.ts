import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDramasComponent } from './all-dramas.component';

describe('AllDramasComponent', () => {
  let component: AllDramasComponent;
  let fixture: ComponentFixture<AllDramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
