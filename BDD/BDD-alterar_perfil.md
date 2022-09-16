#encode: utf-8 
#language: pt 

Funcionalidade: Alterar perfil
    Como um usuário logado do sistema WebHub 
    Fulano deseja alterar seus dados do cadastro inicial
    Para que possa mudar suas especialidades, senha, foto e nome de usuário quando desejar.
    
Contexto: 
    Dado que Fulano está logado em sua conta 

Cenário: Perfil existe
    E ele acessa a página "Perfil"
    E ele insere seus novos dados
    Quando ele clicar em "Alterar"
    Então ele recebe uma mensagem de que foi concluído a sua alteração
    
Cenário: Perfil não existe 
    E ele acessa a página "Cadastro"
    E ele insere seus dados nos campos requisitados
    Quando ele clicar em "Cadastrar"
    Então deve logar para alterar algum parâmetro de seu perfil
    