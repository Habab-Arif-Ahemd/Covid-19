import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedCountriesComponent } from './affected-countries.component';

describe('AffectedCountriesComponent', () => {
  let component: AffectedCountriesComponent;
  let fixture: ComponentFixture<AffectedCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
