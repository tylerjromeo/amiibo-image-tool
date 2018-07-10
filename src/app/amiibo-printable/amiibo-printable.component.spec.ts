import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboPrintableComponent } from './amiibo-printable.component';

describe('AmiiboPrintableComponent', () => {
  let component: AmiiboPrintableComponent;
  let fixture: ComponentFixture<AmiiboPrintableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboPrintableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboPrintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
