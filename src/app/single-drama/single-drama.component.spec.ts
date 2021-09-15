import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDramaComponent } from './single-drama.component';

describe('SingleDramaComponent', () => {
  let component: SingleDramaComponent;
  let fixture: ComponentFixture<SingleDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
