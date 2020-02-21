import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmPointbuyComponent } from './dm-pointbuy.component';

describe('DmPointbuyComponent', () => {
  let component: DmPointbuyComponent;
  let fixture: ComponentFixture<DmPointbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmPointbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmPointbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
