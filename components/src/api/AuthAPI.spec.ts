import {AuthAPI} from './AuthAPI';
import sinon from 'sinon';
import {expect} from 'chai';

describe('Auth API', () => {
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    let xhr: sinon.SinonFakeXMLHttpRequestStatic;
    (global as any).XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    xhr.onCreate = (request: sinon.SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };
  });

  afterEach(() => {
    (global as any).XMLHttpRequest.restore();


    requests.length = 0;
  });

  it('should send POST /auth/signup on signup', () => {
    const api = new AuthAPI();
    const data = {
      email: '', first_name: '', login: '', password: '', phone: '', second_name: '',
    };

    api.signup(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('Post');
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    expect(requests[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signup');
  });
});
