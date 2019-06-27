import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterEditorComponent } from './monster-editor.component';

describe('MonsterEditorComponent', () => {
  let component: MonsterEditorComponent;
  let fixture: ComponentFixture<MonsterEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
