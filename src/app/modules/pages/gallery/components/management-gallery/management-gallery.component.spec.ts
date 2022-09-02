import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGalleryComponent } from './management-gallery.component';

describe('ManagementGalleryComponent', () => {
  let component: ManagementGalleryComponent;
  let fixture: ComponentFixture<ManagementGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
