import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantHeaderComponent } from './avant-header.component';

describe('AvantHeaderComponent', () => {
  let component: AvantHeaderComponent;
  let fixture: ComponentFixture<AvantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
