import { App28Page } from './app.po';

describe('app28 App', () => {
  let page: App28Page;

  beforeEach(() => {
    page = new App28Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
