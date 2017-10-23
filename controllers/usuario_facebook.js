const logger = require('../servicos/logger.js');

module.exports = (app) => {
  
  app.get('/usuarios', (req, res) => {
    const connection = app.persistencia.connectionFactory();
    const usuarioDao = new app.persistencia.UsuarioDao(connection);
    usuarioDao.buscaPorId((erro, resultado) => {
      if(erro){
        console.log('erro ao consultar no banco: ' + erro);
        res.status(500).send(erro);
        return;
      }
      res.json(resultado);
      return;
    });
  });

  app.get('/usuarios/usuario/:id', (req, res) => {
    const id = req.params.id;
    logger.info('consultando: ' + id);
    const connection = app.persistencia.connectionFactory();
    const usuarioDao = new app.persistencia.UsuarioDao(connection);
    usuarioDao.buscaPorId(id, (erro, resultado) => {
      if(erro){
        res.status(500).send(erro);
        return;
      }
      res.json(resultado);
      return;
    });
  });

  app.delete('/usuarios/usuario/:id', (req, res) => {
    const usuario = {};
    const id = req.params.id;

    pagamento.id = id;
    pagamento.status = 'CANCELADO';

    const connection = app.persistencia.connectionFactory();
    const pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.atualiza(pagamento, (erro) => {
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('pagamento cancelado');
        res.status(204).send(pagamento);
    });
  });

  //Verificar se daqui para cima está funcionando!!!!

  /*app.post('/usuarios/usuario', (req, res) => {

    req.assert("pagamento.forma_de_pagamento",
        "Forma de pagamento eh obrigatorio").notEmpty();
    req.assert("pagamento.valor",
      "Valor eh obrigatorio e deve ser um decimal")
        .notEmpty().isFloat();

    const erros = req.validationErrors();

    if (erros){
      console.log('Erros de validacao encontrados');
      res.status(400).send(erros);
      return;
    }

    const pagamento = req.body["pagamento"];
    console.log('processando uma requisicao de um novo pagamento');

    pagamento.status = 'CRIADO';
    pagamento.data = new Date;

    const connection = app.persistencia.connectionFactory();
    const pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.salva(pagamento, (erro, resultado) => {
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
      } else {
      pagamento.id = resultado.insertId;
      console.log('pagamento criado');

      const memcachedClient = app.servicos.memcachedClient();
      memcachedClient.set('pagamento-' + pagamento.id, pagamento,
                60000, (erro) => {
                  console.log('nova chave adicionada ao cache: pagamento-' + pagamento.id);
      });

      if (pagamento.forma_de_pagamento == 'cartao'){
        const cartao = req.body["cartao"];
        console.log(cartao);

        const clienteCartoes = new app.servicos.clienteCartoes();

        clienteCartoes.autoriza(cartao,
            (exception, request, response, retorno) => {
              if(exception){
                console.log(exception);
                res.status(400).send(exception);
                return;
              }
              console.log(retorno);

              res.location('/pagamentos/pagamento/' +
                    pagamento.id);

              const response = {
                dados_do_pagamanto: pagamento,
                cartao: retorno,
                links: [
                  {
                    href:"http://localhost:3000/pagamentos/pagamento/"
                            + pagamento.id,
                    rel:"confirmar",
                    method:"PUT"
                  },
                  {
                    href:"http://localhost:3000/pagamentos/pagamento/"
                            + pagamento.id,
                    rel:"cancelar",
                    method:"DELETE"
                  }
                ]
              }

              res.status(201).json(response);
              return;
        });


      } else {
        res.location('/pagamentos/pagamento/' +
              pagamento.id);

        const response = {
          dados_do_pagamanto: pagamento,
          links: [
            {
              href:"http://localhost:3000/pagamentos/pagamento/"
                      + pagamento.id,
              rel:"confirmar",
              method:"PUT"
            },
            {
              href:"http://localhost:3000/pagamentos/pagamento/"
                      + pagamento.id,
              rel:"cancelar",
              method:"DELETE"
            }
          ]
        }

        res.status(201).json(response);
      }
    }
    });

  });*/
}
