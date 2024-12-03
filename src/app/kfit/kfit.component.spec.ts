import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfitComponent } from './kfit.component';

describe('KfitComponent', () => {
  let component: KfitComponent;
  let fixture: ComponentFixture<KfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KfitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
