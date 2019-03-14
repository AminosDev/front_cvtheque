import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerEntretienComponent } from './programmer-entretien.component';

describe('ProgrammerEntretienComponent', () => {
  let component: ProgrammerEntretienComponent;
  let fixture: ComponentFixture<ProgrammerEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
