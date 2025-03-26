import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffScreenMenuComponent } from './off-screen-menu.component';

describe('OffScreenMenuComponent', () => {
  let component: OffScreenMenuComponent;
  let fixture: ComponentFixture<OffScreenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffScreenMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffScreenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
