import {assertStringIncludes, assertArrayIncludes} from "http://deno.land/std/testing/asserts.ts"

let livro = 'O Grande Gatsby';
let autores = ['Fitzgerald', 'Zelda', 'Natsume Soseki'];

Deno.test("Teste de assertStringIncludes", () => {
    assertStringIncludes(livro, "Gatsby");    
})

Deno.test("Teste de assertArrayIncludes", ()=> {
    assertArrayIncludes(autores, 
        ["Zelda", "Fitzgerald"],
        "O array não está certo");
})