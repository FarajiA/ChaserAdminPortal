import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasersComponent } from './chasers.component';

describe('ChasersComponent', () => {
  let component: ChasersComponent;
  let fixture: ComponentFixture<ChasersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChasersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
