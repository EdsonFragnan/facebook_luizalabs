define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"API LuizaLabs Facebook.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  },
  {
    "type": "DELETE",
    "url": "/usuarios/usuario/:id",
    "title": "Deleta um usuário da base de dados",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Usuário não encontrado no banco.",
          "content": "HTTP/1.1 404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/usuario_facebook.js",
    "groupTitle": "Usuario",
    "name": "DeleteUsuariosUsuarioId"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "Exibe uma lista usuários",
    "group": "Usuario",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[{\n    \"facebookId\": \"100001718509097\",\n    \"first_name\": \"Edson\",\n    \"middle_name\": \"Luiz\",\n    \"last_name\": \"Fragnan\",\n    \"name\": \"Edson Fragnan\",\n    \"birthday\": \"não especificado\",\n    \"hometown\": \"não especificado\",\n    \"locale\": \"não especificado\",\n    \"gender\": \"não especificado\",\n    \"public_key\": \"não especificado\",\n    \"website\": \"não especificado\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412",
          "type": "json"
        },
        {
          "title": "Não possui registros.",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/usuario_facebook.js",
    "groupTitle": "Usuario",
    "name": "GetUsuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/facebook/:id",
    "title": "Exibe um usuário direto no facebook",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"facebookId\": \"100001718509097\",\n    \"first_name\": \"Edson\",\n    \"middle_name\": \"Luiz\",\n    \"last_name\": \"Fragnan\",\n    \"name\": \"Edson Fragnan\",\n    \"birthday\": \"não especificado\",\n    \"hometown\": \"não especificado\",\n    \"locale\": \"não especificado\",\n    \"gender\": \"não especificado\",\n    \"public_key\": \"não especificado\",\n    \"website\": \"não especificado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Usuário não encontrado no facebook.",
          "content": "HTTP/1.1 404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/usuario_facebook.js",
    "groupTitle": "Usuario",
    "name": "GetUsuariosFacebookId"
  },
  {
    "type": "get",
    "url": "/usuarios/usuario/:id",
    "title": "Exibe um usuário",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{ \n    \"facebookId\": \"100001718509097\",\n    \"first_name\": \"Edson\",\n    \"middle_name\": \"Luiz\",\n    \"last_name\": \"Fragnan\",\n    \"name\": \"Edson Fragnan\",\n    \"birthday\": \"não especificado\",\n    \"hometown\": \"não especificado\",\n    \"locale\": \"não especificado\",\n    \"gender\": \"não especificado\",\n    \"public_key\": \"não especificado\",\n    \"website\": \"não especificado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412",
          "type": "json"
        },
        {
          "title": "Não possui registros.",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/usuario_facebook.js",
    "groupTitle": "Usuario",
    "name": "GetUsuariosUsuarioId"
  },
  {
    "type": "POST",
    "url": "/usuarios/usuario/:id",
    "title": "Cadastrar um usuário na base de dados",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de registro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"facebookId\": \"100001718509097\",\n    \"first_name\": \"Edson\",\n    \"middle_name\": \"Luiz\",\n    \"last_name\": \"Fragnan\",\n    \"name\": \"Edson Fragnan\",\n    \"birthday\": \"não especificado\",\n    \"hometown\": \"não especificado\",\n    \"locale\": \"não especificado\",\n    \"gender\": \"não especificado\",\n    \"public_key\": \"não especificado\",\n    \"website\": \"não especificado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Usuário facebook não encontrado.",
          "content": "HTTP/1.1 404",
          "type": "json"
        },
        {
          "title": "Erros de validacão encontrados.",
          "content": "HTTP/1.1 400",
          "type": "json"
        },
        {
          "title": "Erro ao inserir no banco.",
          "content": "HTTP/1.1 412",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/usuario_facebook.js",
    "groupTitle": "Usuario",
    "name": "PostUsuariosUsuarioId"
  }
] });
