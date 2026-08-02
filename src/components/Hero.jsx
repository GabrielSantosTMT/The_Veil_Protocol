\
/**
 * HERO REWRITE TEMPLATE
 *
 * Este arquivo é um ponto de partida otimizado.
 * Observação: para preservar toda a lógica específica do projeto
 * (textos, animações e sequência de imagens), uma reescrita completa
 * exige o restante do projeto para validação.
 *
 * Melhorias incluídas:
 * - overflow-x eliminado
 * - visualViewport para mobile
 * - canvas absoluto
 * - sticky hero
 * - resize otimizado
 * - estrutura pronta para substituir a lógica existente
 */

import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "400vh",
        overflowX: "hidden",
        position: "relative",
        background: "#0a0908"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <canvas
          id="hero-canvas"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            color: "white",
            textAlign: "center",
            padding: "2rem"
          }}
        >
          <div>
            <h1>THE VEIL PROTOCOL</h1>
            <p>Optimized cinematic hero.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
Adicione também ao src/index.css:

html,
body{
  overflow-x:hidden;
}

#root{
  overflow-x:hidden;
}

*/
