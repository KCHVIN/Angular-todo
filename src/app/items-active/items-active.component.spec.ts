import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsActiveComponent } from './items-active.component';

describe('ItemsActiveComponent', () => {
  let component: ItemsActiveComponent;
  let fixture: ComponentFixture<ItemsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
