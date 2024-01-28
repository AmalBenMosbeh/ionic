import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAnnoncePage } from './detail-annonce.page';
import { async } from '@angular/core/testing';

describe('DetailAnnoncePage', () => {
  let component: DetailAnnoncePage;
  let fixture: ComponentFixture<DetailAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
