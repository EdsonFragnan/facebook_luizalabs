"use strict";

describe("GET /", (done) => {

  afterEach(function () {
    process.exit(0);
  });

  it("Retorna status da rota.", (done) => {
    request.get("/")
      .expect(200)
      .end((err, res) => {
        const expected = {status: 'API LuizaLabs Facebook.'};
        expect(res.body).to.eql(expected);
        done(err);
      });
  });
});
