import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLandingComponent } from './about-us-landing.component';

describe('AboutUsLandingComponent', () => {
  let component: AboutUsLandingComponent;
  let fixture: ComponentFixture<AboutUsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
