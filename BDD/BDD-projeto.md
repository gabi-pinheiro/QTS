#encode: utf-8 
#language: pt 

Funcionalidade: Projeto
    Como um usuário logado do sistema WebHub 
    Fulano deseja acessar equipes  
    Para que possa selecionar sua especialidade disponível
    
Contexto: 
    Dado que Fulano está logado em sua conta e acessou pelo cadastramento do projeto ou entrada do PIN do mesmo

Cenário: Projeto existe
    E ele acessa a página "Projeto"
    E ele escolhe uma equipe 
    E ele seleciona sua especialidade
    Quando ele clicar em "Entrar em chat"
    Então ele é direcionado para o chat do projeto
    
Cenário: Projeto não existe 
    E ele acessa a página "Criar"
    E ele insere os dados do projeto nos campos requisitados
    Quando ele clicar em "Concluir"
    Então deve ser direcionado para a página de seu projeto
    