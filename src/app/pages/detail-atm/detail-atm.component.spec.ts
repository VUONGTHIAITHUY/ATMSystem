import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAtmComponent } from './detail-atm.component';

describe('DetailAtmComponent', () => {
  let component: DetailAtmComponent;
  let fixture: ComponentFixture<DetailAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailAtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
