import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosfooterComponent } from './todosfooter.component';

describe('TodosfooterComponent', () => {
  let component: TodosfooterComponent;
  let fixture: ComponentFixture<TodosfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
