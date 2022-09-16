#encoding: utf-8
#language: pt 

Funcionalidade: Login 
    Como um funcionário do sistema WebHub 
    Fulano quer completar o login 
    Para que ele tenha acesso às funcionalidades da aplicação e a seu perfil 
    
Contexto: 
    Dado que Fulano possui uma conta no WebHub 
    
Cenário: Login válido 
    E ele acessa a página de login 
    E ele preenche suas credenciais válidas 
    Quando ele pressiona "Entrar"
    Então ele deve ser redirecionado para a página de perfil 
    
Cenário: Login inválido
    E ele acessa a página de login 
    E ele preenche credenciais incorretamente 
    Quando ele pressiona "Entrar"
    Então deve aparecer uma mensagem de usuário inválido
    

