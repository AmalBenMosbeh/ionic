import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MesAnnoncePage } from './mes-annonce.page';

describe('MesAnnoncePage', () => {
  let component: MesAnnoncePage;
  let fixture: ComponentFixture<MesAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
