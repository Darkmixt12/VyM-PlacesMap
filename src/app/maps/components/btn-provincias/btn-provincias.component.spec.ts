import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnProvinciasComponent } from './btn-provincias.component';

describe('BtnProvinciasComponent', () => {
  let component: BtnProvinciasComponent;
  let fixture: ComponentFixture<BtnProvinciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnProvinciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
