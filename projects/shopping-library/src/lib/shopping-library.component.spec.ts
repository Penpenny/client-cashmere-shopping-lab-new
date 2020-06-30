import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLibraryComponent } from './shopping-library.component';

describe('ShoppingLibraryComponent', () => {
  let component: ShoppingLibraryComponent;
  let fixture: ComponentFixture<ShoppingLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
