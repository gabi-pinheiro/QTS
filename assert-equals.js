import {assertEquals, assertNotEquals} from "http://deno.land/std/testing/asserts.ts"

let pais = "brasil";

Deno.test("Test assertEquals", () => {
    assertEquals(pais, "brasil");
});

Deno.test("Teste assertNotEquals", ()=> {
    assertNotEquals(pais, "Argentina");
})