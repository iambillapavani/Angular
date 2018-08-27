import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcountryComponent } from './mapcountry.component';

describe('MapcountryComponent', () => {
  let component: MapcountryComponent;
  let fixture: ComponentFixture<MapcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
