import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethinkComponent } from './somethink.component';

describe('SomethinkComponent', () => {
  let component: SomethinkComponent;
  let fixture: ComponentFixture<SomethinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
