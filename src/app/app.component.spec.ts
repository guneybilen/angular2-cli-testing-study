/*
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('Should define a list object', () => {
    expect(comp.items).toBeDefined();
  });

  it('Should have 3 items in list', () => {
    expect(comp.items.length).toBe(3);
  });

  it('List items should be as expected', () => {
    expect(comp.items).toEqual(['test','execute','refactor']);
  });

  describe('Testing add method', () => {

      beforeEach(() => {
          comp.add('new-item');
      });

      it('Should have 4 items in list', () => {
          expect(comp.items.length).toBe(4);
      });

      it('Should add a new item at the end of list', () => {
          var lastIndexOfList = comp.items.length - 1;
    			expect(comp.items[lastIndexOfList]).toEqual('new-item');
      });
  });

});
*/

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    comp.add('a sample comment');
    comp.like(comp.comments[0]);
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('First item in the item should match', () => {
    expect(comp.comments[0].title).toBe('a sample comment');
  });

  it('Number of likes should increase on like', () => {
    expect(comp.comments[0].likes).toEqual(1);
  });

});