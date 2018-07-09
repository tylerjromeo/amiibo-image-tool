import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboDetailsComponent } from './amiibo-details.component';

describe('AmiiboDetailsComponent', () => {
  let component: AmiiboDetailsComponent;
  let fixture: ComponentFixture<AmiiboDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
