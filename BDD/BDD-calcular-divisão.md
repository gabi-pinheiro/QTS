#encode: utf-8 
#language: pt 

Funcionalidade: Calcular divisão de equipes 
    Como um usuário do WebHub 
    Fulano deseja criar um projeto 
    Para que outros possam entrar em equipes dentro dele 
    
Contexto: 
    Dado que Fulano está logado em sua conta 
    
Cenário: Preenchimento válido 
    E ele acessa a página Meus Projetos 
    E ele preenche as informações de maneira correta 
    Quando ele clicar em "Calcular divisão"
    Então ele deve receber uma lista de todos os números de grupos e pessoas 
    
Cenário: Preenchimento inválido 
    E ele acessa a página Meus Projetos 
    E ele preenche as informações de maneira incorreta 
    Quando ele clicar em "Calcular divisão"
    Então a divisão não deve acontecer 
    E ele deve receber um aviso de que as informações preenchidas estão inválidas 
    
