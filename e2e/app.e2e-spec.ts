import { FlyTrckPage } from './app.po';

describe('fly-trck App', function() {
  let page: FlyTrckPage;

  beforeEach(() => {
    page = new FlyTrckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
