/*import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: `<h3>MY Items</h3><ul><li *ngFor="let item of items">{{ item }}</li></ul>`
})
export class AppComponent {
  items:Array<string>;

  constructor() {
    this.items = ['test','execute','refactor'];
  }

  add(item) {
    this.items.push(item);
  }
};*/



import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <input type="text" [(ngModel)]="newComment">
    <button type="button" (click)="add(newComment)">Submit</button>
    <ul>
      <li *ngFor="let comment of comments">
      {{comment.title}}
      <button type="button" (click)="like(comment)">like</button>
      <span id="likes">{{comment.likes}}</span>
      </li>
    </ul>`
})
export class AppComponent {
    comments:Array<any>;

    constructor() {
        this.comments = [
          {title: 'First commemnt', likes: 0}
        ];
    }

    add(comment) {
        var commentObj = {title: comment, likes: 0};
        this.comments.unshift(commentObj);
    }

    like(comment) {
        comment.likes++
    }
}