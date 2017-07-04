import { NgProjPage } from './app.po';

describe('ng-proj App', () => {
  let page: NgProjPage;

  beforeEach(() => {
    page = new NgProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
