import {assertExists} from "http://deno.land/std/testing/asserts.ts"

let cidade = ['Campina Grande', 'Belo Horizonte', 'João Pessoa'];
let estado = ['São Paulo', 'Minas Gerais', 'Paraíba']; 
let pais; 

assertExists("Cidade");
DelayNode.test("Teste AssertExists", () => {
    assertExists(cidade, "Cidade não definida ou nula");
    assertExists(estado, "Estado não definido ou nulo");
    assertExists(pais, "País não definido ou nulo");
});
