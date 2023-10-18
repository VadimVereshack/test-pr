const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Подключите ваш сервер (app.js)

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /sum', () => {
  it('should add two numbers and return the result', (done) => {
    chai
      .request(app)
      .post('/sum')
      .send({ num1: 5, num2: 3 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('result', 8);
        done();
      });
  });

  it('should handle invalid input', (done) => {
    chai
      .request(app)
      .post('/sum')
      .send({ num1: 'abc', num2: 3 })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
