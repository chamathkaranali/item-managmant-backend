import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItem } from './get-item';

describe('GetItem', () => {
  let component: GetItem;
  let fixture: ComponentFixture<GetItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
