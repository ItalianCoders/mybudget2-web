import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovementsComponent } from './last-movements.component';

describe('LastMovementsComponent', () => {
  let component: LastMovementsComponent;
  let fixture: ComponentFixture<LastMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
