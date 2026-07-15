//indica ao react que a página terá memória e interações
"use client";
import { useState } from "react";
//importa a barra lateral
import { BarraLateral } from "@/components/ui/barraLateral";
//importa todas as opções de págna que o usuário tem
import { RegistrarPessoa } from "@/components/paginas/registrarPessoa";
import { ExcluirPessoa } from "@/components/paginas/excluirPessoa";
import { RegistrarTransacao } from "@/components/paginas/registrarTransacao";
import { ConsultarTotais } from "@/components/paginas/consultarTotais";
import { MenuInicial } from "@/components/paginas/menuInicial";
import { TodasAsTransacoes } from "@/components/paginas/todasAsTransacoes";
import { TodasAsPessoas } from "@/components/paginas/todasAsPessoas";

export default function Home() {
  
  //inicia o state com a página inicial
  const [telaAtual, definirTela] = useState("menuInicial");
  
  //une a barra lateral com o fundo e o conteúdo da página que o usuário está.
  return (
    <div className="bg-[#08002B] min-h-[100vh]">
      <div className="flex flex-row">
        {/* Barra lateral fixa. Junto dela contém o atributo ao clicar que recebe a função 'definirTela' que define o valor de 'telaAtual' */}
        <BarraLateral aoClicar={definirTela}/>
      
        {/* div do conteúdo da página que o usuário está */}
        <div className="w-[100vw]">

          {telaAtual === "registrarPessoa" && <RegistrarPessoa/>}
          {telaAtual === "excluirPessoa" && <ExcluirPessoa/>}
          {telaAtual === "registrarTransacao" && <RegistrarTransacao/>}
          {telaAtual === "consultarTotais" && <ConsultarTotais aoClicar={definirTela} receitas={5600000000} despesas={4200000000}/>}
          {telaAtual === "menuInicial" && <MenuInicial aoClicar={definirTela}/>}
          {telaAtual === "todasTransacoes" && <TodasAsTransacoes/>}
          {telaAtual === "todasPessoas" && <TodasAsPessoas/>}
        </div>
      </div>
    </div>
  );
}
