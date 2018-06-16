import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsViewComponent } from './savings-view.component';

describe('SavingsViewComponent', () => {
  let component: SavingsViewComponent;
  let fixture: ComponentFixture<SavingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
