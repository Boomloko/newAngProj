import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFilmsComponent } from './best-films.component';

describe('BestFilmsComponent', () => {
  let component: BestFilmsComponent;
  let fixture: ComponentFixture<BestFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
