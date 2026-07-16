//importa a busca de pessoa por ID
import { BuscarPessoa } from "@/funcionalidades/pessoas/buscarPessoa";

//avisa ao react que a página terá memória e interações
import { useState, useEffect } from "react";


//componente de cartão de transação completo com todas informações
export function CartaoTransacaoCompleto({ nome, descricao, valor, tipo, pessoaId }: { nome: string, descricao: string, valor: number, tipo: string, pessoaId: number }) {
    //inicializa o userstate como string indicando que está carregando.
    const [pessoaEscolhida, definirPessoa] = useState<string>("Carregando...");

    //formatador de numero (quebra valores gigantes em abreviações, ex: '1.000.000.000' vira '1.0 bi')
    //pt-BR define a formatação pra portugues brasileiro
    const resultado = new Intl.NumberFormat('pt-BR', {
        //notation define que formata para compactar
        "notation": "compact",
        //compactDisplay indica se a frase pós número é longa ou curta, ex: '1.0  bi' '1.0 bilhão'
        "compactDisplay": "long",
        //define o limite de digitos pós vírgula.
        "maximumFractionDigits": 2
    });

    useEffect(() => {
        BuscarPessoa(pessoaId).then((dados) => {
            //usa a função para buscar a pessoa escolhida
            definirPessoa(dados.nome);
        })
    }, []);

    return(
        <div className="w-[100%] h-fit rounded-[15px] flex flex-row justify-around items-center border-[1px] border-white p-[1%] flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Nome:</b></h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{nome}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Valor:</b></h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">R$ {resultado.format(valor)}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Descricao:</b></h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{descricao}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Tipo:</b></h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{tipo}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Pessoa:</b></h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{pessoaEscolhida}</h3>
            </div>
        </div>
    );
}