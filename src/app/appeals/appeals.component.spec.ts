import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsComponent } from './appeals.component';

describe('AppealsComponent', () => {
  let component: AppealsComponent;
  let fixture: ComponentFixture<AppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
