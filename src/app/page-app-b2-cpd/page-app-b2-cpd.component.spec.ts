import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAppB2CpdComponent } from './page-app-b2-cpd.component';

describe('PageAppB2CpdComponent', () => {
  let component: PageAppB2CpdComponent;
  let fixture: ComponentFixture<PageAppB2CpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAppB2CpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAppB2CpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
