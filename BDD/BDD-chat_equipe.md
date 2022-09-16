#encode: utf-8 
#language: pt 

Funcionalidade: Chat da equipe
    Como um usuário logado do sistema WebHub 
    Fulano deseja acessar chat da equipe
    Para que possa discutir com os integrantes de sua equipe
    
Contexto: 
    Dado que Fulano está logado em sua conta e foi direcionado para a página

Cenário: Chat existe
    E ele acessa a página "Chatfb"
    E ele envia uma mensagem
    Quando ele clicar em "Enviar"
    Então ele é integrado com as mensagens dos outros participantes da equipe
    
Cenário: Chat não existe 
    E ele acessa a página "Projeto"
    E ele escolhe sua especialidade
    Quando ele clicar em "Entrar em chat"
    Então deve ser direcionado para a página do chat da equipe
    