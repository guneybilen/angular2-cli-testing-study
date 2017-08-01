import { TtdPage } from './app.po';

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
