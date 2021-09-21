import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtolistComponent } from './addtolist.component';

describe('AddtolistComponent', () => {
  let component: AddtolistComponent;
  let fixture: ComponentFixture<AddtolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
