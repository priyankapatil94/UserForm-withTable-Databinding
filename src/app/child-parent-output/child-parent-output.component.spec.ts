import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentOutputComponent } from './child-parent-output.component';

describe('ChildParentOutputComponent', () => {
  let component: ChildParentOutputComponent;
  let fixture: ComponentFixture<ChildParentOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildParentOutputComponent]
    });
    fixture = TestBed.createComponent(ChildParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
