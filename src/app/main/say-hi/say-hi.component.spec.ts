import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayHiComponent } from './say-hi.component';

describe('SayHiComponent', () => {
  let component: SayHiComponent;
  let fixture: ComponentFixture<SayHiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayHiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
