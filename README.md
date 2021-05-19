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
1) Vamos criar o banco de dados:
```sql Create database smarkio;
Create database smarkio;
```

2) Vamos usar o banco criado:
```sql
use smarkio;
```

3) Crie essa tabela:

```sql
create table comments(
  id int NOT NULL AUTO_INCREMENT,
  txt text,
  audio varchar(30),
  PRIMARY KEY(id)  
)
```

Com o banco de dados criado, clone esse repositório.

Abra o terminal na pasta backend e digite o comando a seguir para baixar as dependencias do projeto:
```node
 npm install
```

Va até o arquivo db.js na pasta src, e altere os dados da constante connection para os configurados por você no seu dispositivo.

Crie uma conta gratuita na ibm cloud, e coloque os seus dados em convertText.js na pasta services, 

altere a apikey para a sua key, e o valor de serviceUrl para o mostrado no seu perfil da ibm cloud.

Escreva no terminal dentro da pasta backend:
```node
node src/app.js
```

Agora só acessar https://localhost:3000 e começar a converter texto para áudio.

Isso é tudo :smiley:




