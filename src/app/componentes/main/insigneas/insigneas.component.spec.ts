import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsigneasComponent } from './insigneas.component';

describe('InsigneasComponent', () => {
  let component: InsigneasComponent;
  let fixture: ComponentFixture<InsigneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsigneasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsigneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
