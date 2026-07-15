//importa a prévia do cartão de pessoa
import { CartaoPessoaPrevia } from "../ui/cartaoPessoaPrevia";
//importa a prévia do cartão de transação
import { CartaoTransacaoPrevia } from "../ui/cartaoTransacaoPrevia";
//indica para o react que a tela terá memória e interação, além de garantir o necessário para realizar requisições
import { useState, useEffect } from "react";
//importa a interface pessoa
import { Pessoa } from "@/modelos/Pessoa";
//importa a interface transacao
import { Transacao } from "@/modelos/Transacao";
//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";

//componente da tela de menu inicial
export function MenuInicial({ aoClicar }: { aoClicar: (botaoClicado: string) => void }) {
    //define a variável pessoas através da busca no arquivo 'buscarTodasPessoas.tsx'
    const pessoas = BuscarTodasPessoas();
    //isso aqui além de inicializar o userstate como array vazio []. Também indica que o userState é uma lista de teansações '<Transacao[]>
    const [ transacao, definirTransacao ] = useState<Transacao[]>([]);

    
    return(
        <div className="flex flex-row justify-center p-[5vh] gap-[10%] h-[100vh]">
            <div className="flex flex-col items-center gap-[2%]">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                {
                    //mapeia cada pessoa para criar um cartão pra cada
                    pessoas.map((pessoa) => {
                        //retorna a crição do componente de cartão com as informações buscadas do BD.
                        return <CartaoPessoaPrevia key={pessoa.id || 0} nome={pessoa.nome || ""} idade={pessoa.idade || 0}/>
                    })
                }
                <h3 onClick={() => aoClicar("todasPessoas")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>

            <img src="/images/linha.png" alt="Linha de divisão entre os tópicos." className="h-[100%]"/>

            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                
                <h3 onClick={() => aoClicar("todasTransacoes")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>
        </div>
    );
}