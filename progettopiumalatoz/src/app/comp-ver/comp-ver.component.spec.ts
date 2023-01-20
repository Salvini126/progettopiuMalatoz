import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVerComponent } from './comp-ver.component';

describe('CompVerComponent', () => {
  let component: CompVerComponent;
  let fixture: ComponentFixture<CompVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
