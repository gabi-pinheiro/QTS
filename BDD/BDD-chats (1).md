#encode: utf-8 
#language: pt 

Funcionalidade: Chats
    Como um usuário logado do sistema WebHub 
    Fulano deseja acessar os chats de cada equipe que entrou
    
Contexto: 
    Dado que Fulano está logado em sua conta 

Cenário: Lista de chats existe
    E ele acessa a página "Chats"
    E ele tem acesso a cada  chat já acessado
    Quando ele clicar em um item da lista
    Então ele é direcionado para o chat em questão
    
Cenário: Lista de Chats não existe
    E ele acessa a página "Projeto"
    E ele escolhe sua especialidade
    Quando ele clicar em "Entrar em chat"
    Para ser direcionado para a página do chat da equipe
    Então um item da lista de chats é criado
    