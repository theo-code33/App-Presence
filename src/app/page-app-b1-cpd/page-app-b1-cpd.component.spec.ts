import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAppB1CpdComponent } from './page-app-b1-cpd.component';

describe('PageAppB1CpdComponent', () => {
  let component: PageAppB1CpdComponent;
  let fixture: ComponentFixture<PageAppB1CpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAppB1CpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAppB1CpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
