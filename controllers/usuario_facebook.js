const logger = require('../servicos/logger.js');
const mensagem_erro = 'Erro ao consultar no banco.';
module.exports = (app) => {
  
  app.get('/usuarios', (req, res) => {
    const connection = app.persistencia.connectionFactory();
    const usuarioDao = new app.persistencia.UsuarioDao(connection);
    usuarioDao.lista((erro, resultado) => {
      if(erro){
        console.log(mensagem_erro + ': ' + erro);
        res.status(412).json({msg: mensagem_erro});
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
        console.log(mensagem_erro + ': ' + erro);
        res.status(412).json({msg: mensagem_erro}); 
        return;
      }
      res.json(resultado);
      return;
    });
  });

  app.delete('/usuarios/usuario/:id', (req, res) => {
    const id = req.params.id;
    const connection = app.persistencia.connectionFactory();
    const usuarioDao = new app.persistencia.UsuarioDao(connection);

    usuarioDao.atualiza(id, (erro) => {
        if (erro){
          console.log(mensagem_erro + ': ' + erro);
          res.status(412).json({msg: mensagem_erro});
          return;
        }
        console.log('Usuário deletado.');
        res.status(204);
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
    const UsuarioDao = new app.persistencia.UsuarioDao(connection);

    UsuarioDao.salva(pagamento, (erro, resultado) => {
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
