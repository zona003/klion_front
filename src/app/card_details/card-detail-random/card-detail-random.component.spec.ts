import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailRandomComponent } from './card-detail-random.component';

describe('CardDetailRandomComponent', () => {
  let component: CardDetailRandomComponent;
  let fixture: ComponentFixture<CardDetailRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailRandomComponent]
    });
    fixture = TestBed.createComponent(CardDetailRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
