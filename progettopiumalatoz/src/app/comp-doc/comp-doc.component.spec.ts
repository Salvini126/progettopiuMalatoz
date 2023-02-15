import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDocComponent } from './comp-doc.component';

describe('CompDocComponent', () => {
  let component: CompDocComponent;
  let fixture: ComponentFixture<CompDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
