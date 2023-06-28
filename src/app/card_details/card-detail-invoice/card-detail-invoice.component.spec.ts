import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailInvoiceComponent } from './card-detail-invoice.component';

describe('CardDetailInvoiceComponent', () => {
  let component: CardDetailInvoiceComponent;
  let fixture: ComponentFixture<CardDetailInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailInvoiceComponent]
    });
    fixture = TestBed.createComponent(CardDetailInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
