import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtmComponent } from './list-atm.component';

describe('ListAtmComponent', () => {
  let component: ListAtmComponent;
  let fixture: ComponentFixture<ListAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
