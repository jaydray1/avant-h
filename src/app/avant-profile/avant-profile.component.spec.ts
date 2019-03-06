import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantProfileComponent } from './avant-profile.component';

describe('AvantProfileComponent', () => {
  let component: AvantProfileComponent;
  let fixture: ComponentFixture<AvantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
