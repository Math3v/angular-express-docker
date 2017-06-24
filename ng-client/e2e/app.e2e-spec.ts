import { NgClientPage } from './app.po';

describe('ng-client App', () => {
  let page: NgClientPage;

  beforeEach(() => {
    page = new NgClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
