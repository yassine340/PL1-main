import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utilisateur2Component } from './utilisateur2.component';

describe('Utilisateur2Component', () => {
  let component: Utilisateur2Component;
  let fixture: ComponentFixture<Utilisateur2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Utilisateur2Component]
    });
    fixture = TestBed.createComponent(Utilisateur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
