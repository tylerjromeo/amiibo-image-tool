import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableListComponent } from './printable-list.component';

describe('PrintableListComponent', () => {
  let component: PrintableListComponent;
  let fixture: ComponentFixture<PrintableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
