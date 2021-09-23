import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdemoComponent } from './bdemo.component';

describe('BdemoComponent', () => {
  let component: BdemoComponent;
  let fixture: ComponentFixture<BdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
