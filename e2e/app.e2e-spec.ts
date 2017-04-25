import { AngularDeepDivePage } from './app.po';

describe('angular-deep-dive App', () => {
  let page: AngularDeepDivePage;

  beforeEach(() => {
    page = new AngularDeepDivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
