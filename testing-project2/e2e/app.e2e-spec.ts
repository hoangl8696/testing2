import { TestingProject2Page } from './app.po';

describe('testing-project2 App', function() {
  let page: TestingProject2Page;

  beforeEach(() => {
    page = new TestingProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
