import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSignatureComponent } from './developer-signature.component';

describe('DeveloperSignatureComponent', () => {
  let component: DeveloperSignatureComponent;
  let fixture: ComponentFixture<DeveloperSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperSignatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
