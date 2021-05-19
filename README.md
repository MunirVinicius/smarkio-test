# :speech_balloon: Text to Speech Application 
Teste realizado para a Smarkio.

## :wrench: Tecnologias:
Node.js

Express

Pug Template Engine

Mysql Database

## :calling: API Utilizada: 
[IBM Text-to-speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech)

## :sound: Quer testar ? Siga os seguintes passos:
Suba o seu servidor Mysql.

### Rode os seguintes comandos:
1) Create database smarkio;

2) Use database smarkio;

3) Crie essa tabela:

```ruby
create table comments(
  id int NOT NULL AUTO_INCREMENT,
  txt text,
  audio varchar(30),
  PRIMARY KEY(id)  
)
```

Com o banco de dados criado, clone esse repositório.

```ruby
Abra o terminal na pasta backend e digite o comando: "npm install"
```

Va até o arquivo db.js na pasta src, e altere os dados da constante connection para os configurados por você no seu dispositivo.

Crie uma conta gratuita na ibm cloud, e coloque os seus dados em convertText.js na pasta services, 

altere da apikey para a sua key, e o valor de serviceUrl para o mostrado no seu perfil da ibm cloud.
```ruby
Escreva no terminal dentro da pasta backend "node src/app.js"
```

Isso é tudo :smiley:




