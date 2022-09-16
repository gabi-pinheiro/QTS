#encode: utf-8 
#language: pt 

Funcionalidade: Entrar em um projeto 
    Como um usuário logado do sistema WebHub 
    Fulano deseja entrar em um projeto 
    Para que possa ter acesso às equipes e papéis disponíveis 
    
Contexto: 
    Dado que Fulano está logado em sua conta 

Cenário: Projeto existe 
    E ele acessa a página "Criar Projeto"
    E ele insere um PIN de projeto válido 
    Quando ele clicar em "Entrar"
    Então ele deve ser redirecionado para a página de equipes 
    
Cenário: projeto não existe 
    E ele acessa a página "Criar Projeto"
    E ele insere um PIN que não se refere a nenhum projeto existente
    Quando ele clicar em "Entrar"
    Então deve aparecer uma mensagem dizendo que o projeto não foi encontrado 
    
Cenário: PIN com formato inválido 
    E ele acessa a página "Criar Projeto"
    E ele insere um PIN em formato inválido
    Quando ele clicar em "Entrar"
    Então deve aparecer uma mensagem dizendo que o PIN informado é inválido