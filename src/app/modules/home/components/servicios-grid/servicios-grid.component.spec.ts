import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosGridComponent } from './servicios-grid.component';

describe('ServiciosGridComponent', () => {
  let component: ServiciosGridComponent;
  let fixture: ComponentFixture<ServiciosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
