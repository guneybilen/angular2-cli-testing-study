/* import { TtdPage } from './app.po';

describe('ttd App', () => {
  let page: TtdPage;

  beforeEach(() => {
    page = new TtdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

*/


/*import { browser, element, by } from 'protractor';

describe('AppComponent Tests', () => {

    var todoListItems = element.all(by.css('li'));

    beforeEach(() => {
        browser.get('/');
    });

    it('Browser should have a defined title', () => {
        expect(browser.getTitle()).toEqual('Angular Protractor');
    });

    it('Should get the number of items as defined in item object', () => {
        expect(todoListItems.count()).toBe(3);
    });

    it('Should get the first item text as defined', () => {
        expect(todoListItems.first().getText()).toEqual('test');
    });

    it('Should get the last item text as defined', () => {
        expect(todoListItems.last().getText()).toEqual('refactor');
    });

});*/


import { browser, element, by } from 'protractor';

describe('Given I am posting a new comment', () => {
    describe('When I push the submit button', () => {
        beforeEach(() => {
            //Assemble
            browser.get('');
            var commentInput = element(by.css('input'));
            commentInput.sendKeys('a sample comment');
            //Act
            var submitButton = element(by.buttonText('Submit')).click();
        });
        //Assert
        it('Should then add the comment', () => {
            var comment = element.all(by.css('li')).first();
            expect(comment.getText()).toBe('a sample comment like 0');
        });
    });

    describe('When I like a comment', () => {
        var firstComment = null;

        beforeEach(() => {
            browser.get('');

            //Assemble
            firstComment = element.all(by.css('li')).first();
            var likeButton = firstComment.element(by.buttonText('like'));

            //Act
            likeButton.click();
        });

        //Assert
        it('Should increase the number of likes to one', () => {
            var commentLikes = firstComment.element(by.css('#likes'));
            expect(commentLikes.getText()).toEqual('1');
        });
    });
});