import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSlideshowPageComponent } from './random-slideshow-page.component';

describe('RandomSlideshowPageComponent', () => {
  let component: RandomSlideshowPageComponent;
  let fixture: ComponentFixture<RandomSlideshowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSlideshowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomSlideshowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
