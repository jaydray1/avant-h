import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantFooterComponent } from './avant-footer.component';

describe('AvantFooterComponent', () => {
  let component: AvantFooterComponent;
  let fixture: ComponentFixture<AvantFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvantFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
