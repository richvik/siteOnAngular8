import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastesComponent } from './tastes.component';

describe('TastesComponent', () => {
  let component: TastesComponent;
  let fixture: ComponentFixture<TastesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
