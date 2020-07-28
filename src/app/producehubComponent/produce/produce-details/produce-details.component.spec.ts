import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceDetailsComponent } from './produce-details.component';

describe('ProduceDetailsComponent', () => {
  let component: ProduceDetailsComponent;
  let fixture: ComponentFixture<ProduceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
