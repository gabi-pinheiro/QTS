#encode: utf-8
#language: pt 

Funcionalidade: Criar projeto 
    Como um usuário logado do WebHub 
    Fulano deseja criar um projeto 
    Para que outros possam acessar e entrar nas equipes 
    
Contexto: 
    Dado que Fulano já concluiu de forma correta a divisão dos grupos 
    
Cenário: Preenchimento válido das requisições  
    E ele adiciona as requisições do trabalho corretamente 
    Quando ele clicar em "concluir"
    Então ele deve ser redirecionado para a página de escolha de grupos 
    
Cenário: Preenchimento inválido das requisições 
    E ele adiciona as requisições de maneira inválida 
    Quando ele clicar em "concluir"
    Então ele deve receber uma mensagem dizendo que seu preenchimento foi inválido 
    
    