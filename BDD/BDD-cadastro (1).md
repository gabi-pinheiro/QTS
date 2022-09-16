#encoding 
#language: pt

Funcionalidade: cadastro
    Como um usuário do sistema WebHub 
    Fulano deseja cadastrar-se 
    Para que ele tenha um login 
    E possa acessar o sistema 
    
Contexto: 
    Dado que Fulano não possui uma conta no WebHub 
    
Cenário: Informações válidas 
    E ele acessa a página de cadastro 
    E ele preenche as informações corretamente 
    Quando ele aciona o botão "Entrar" 
    Então ele deve ser redirecionado para a página de login
    
Cenário: Informações inválidas ou formulário em branco 
    E ele acessa a página de cadastro 
    E ele preenche as informações de forma incorreta ou não preenche nada 
    Quando ele aciona o botão "Entrar"
    Então deve aparecer uma mensagem dizendo que tais campos estão preenchidos incorretamente
    
    
    
    
