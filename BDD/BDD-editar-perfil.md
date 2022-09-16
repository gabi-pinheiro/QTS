#encode: utf-8 
#language: pt 

Funcionalidade: Editar perfil 
    Como um usuário logado do WebHub 
    Fulano deseja alterar as informações presentes em seu perfil 
    
Contexto: 
    Dado que Fulano está logado em sua conta 
    
Cenário: Alterações corretas 
    E ele acessa a página de perfil 
    E ele clica em "editar"
    E ele altera suas informações sem deixar campos vazios ou inválidos 
    Quando ele clicar em "atualizar"
    Então as informações adicionadas por ele devem ser salvas 
    E ele deve ser redirecionado para sua página de perfil 
    
Cenário: Alterações incorretas 
    E ele acessa a página de perfil 
    E ele clica em "editar"
    E ele altera suas informações 
    Mas deixa algum campo vazio ou inválido 
    Quando ele clicar em "atualizar"
    Então deve aparecer uma mensagem dizendo que as alterações feitas são inválidas e que ele deve tentar novamente
    