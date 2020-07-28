import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceUpdateComponent } from './produce-update.component';

describe('ProduceUpdateComponent', () => {
  let component: ProduceUpdateComponent;
  let fixture: ComponentFixture<ProduceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
