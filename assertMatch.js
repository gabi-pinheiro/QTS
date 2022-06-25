import {assertMatch, assertNotMatch} from "http://deno.land/std/testing/asserts.ts"

const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Teste de match", () => {
    assertMatch("https://www.youtube.com", Url, "Erro: essa url não é a desejada");
    assertMatch("https://web.whatsapp.com", Url, "Erro: essa url não é a desejada");
  });

Deno.test("Teste de notMatch", () => {
    assertNotMatch("https://www.youtube.com/watch?v=dQw4w9WgXcQ", Url, "Erro: essa url é linda (definitivamente não é um rickroll)");
  });
