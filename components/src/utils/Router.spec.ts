import { JSDOM } from 'jsdom';
import { expect } from 'chai';

import Router from './Router';

describe('Router', () => {
  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><head></head><body><div id="app"></div></body>', {
      url: 'http://localhost:3000'
    });

    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  it('should be singletone', () => {
    const router = new Router();

    expect(new Router()).to.eq(router);
  });

  describe('.use', () => {
    it('should return Router instance', () => {
      const router = new Router();

      const result = router.use('/', class {} as any)

      expect(result).to.eq(router);
    });
  });

  describe('.start', () => {

  });

  describe.only('.go', () => {
    beforeEach(() => {
      class MyBlock {
        getContent() {
          const div = document.createElement('div')

          div.id = 'test-div';

          return div;
        }
      }

      const router = new Router();
      router.use('/page', MyBlock as any);

      router.go('/page');
    });



    it('should render new block', () => {
      expect(document.getElementById('test-div')).not.to.be.null;
    });

    it('should change location pathname', () => {
      expect(window.location.pathname).to.eq('/');
    });
  });

  describe('.back', () => {

  });

  describe('.forward', () => {

  });
});
