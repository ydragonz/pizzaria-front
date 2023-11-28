import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPizzaComponent } from './editar-pizza.component';

describe('EditarPizzaComponent', () => {
  let component: EditarPizzaComponent;
  let fixture: ComponentFixture<EditarPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPizzaComponent]
    });
    fixture = TestBed.createComponent(EditarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
