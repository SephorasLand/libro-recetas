import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaInfoComponent } from './receta-info.component';

describe('RecetaInfoComponent', () => {
  let component: RecetaInfoComponent;
  let fixture: ComponentFixture<RecetaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
