//componente: Tela de consulta de totais
//imports do react
//useState para poder trabalhar com salvamento dinâmico de informações ("memória da página")
//useEffect para que os métodos selecionados sejam chamados apenas uma vez e não sobrecarregue a página (ele cuida de tudo que não envolve desenho em telas)
import { useState, useEffect } from "react";

//interfaces
//importa a interface de pessoa, para utilizar corretamente seus atributos
import { Pessoa } from "@/modelos/Pessoa";
//importa a interface de transação, para utilizar corretamente seus atributos
import { Transacao } from "@/modelos/Transacao";

//funções
//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";
//importa a busca de todas as transacoes
import { BuscarTodasTransacoes } from "@/funcionalidades/transacoes/buscarTodasTransacoes";
//importa formatador de número
import { FormatadorNumero } from "@/funcionalidades/geral/formatadorNumero";


//ui
//importa cartão de pessoa
import { CartaoPessoaCompleto } from "../ui/cartaoPessoaCompleto";
//importa cartão de transação
import { CartaoTransacaoCompleto } from "../ui/cartaoTransacaoCompleto";

//componente em si
export function ConsultarTotais() {
    //define o tipo de useState como Pessoa (interface) useState<Pessoa>, pois assim seus atributos são devidamente definidos
    //define que é uma lista de pessoas e não só uma pessoa useState<Pessoa[]>
    //define que essa lista de pessoas que nós vamos usar ao abrir a página começa com uma lista vazia useState<Pessoa[]>([])
    const [ pessoas, definirPessoas ] = useState<Pessoa[]>([]);
    //usa o useEffect para chamar apenas uma vez o método
    useEffect(() => {
        //busca todas as pessoas, quando o retorno for ok, ou seja, deu certo, ele então utiliza o useState para definir o valor de 'pessoas'.
        BuscarTodasPessoas().then(dados => {
            //define 'pessoas' com sua função propria para definir (useState)
            definirPessoas(dados);
        });
    }, []); //no array é onde definimos as dependências do useEffect, ele estando vazio vai chamar apenas uma vez esse método
    
    //define o tipo de useState como Transacao (interface) useState<Transacao>, pois assim seus atributos são devidamente definidos
    //define que é uma lista de transações e não só uma transação useState<Transacao[]>
    //define que essa lista de transações que nós vamos usar ao abrir a página começa com uma lista vazia useState<Transacao[]>([])
    const [ transacoes, definirTransacoes ] = useState<Transacao[]>([]);
    //usa o useEffect para chamar apenas uma vez o método
    useEffect(() => {
        //busca todas as transações, quando o retorno for ok, ou seja, deu certo, ele então utiliza o useState para definir o valor de 'transacoes'.
        BuscarTodasTransacoes().then(dados => {
            //define 'transacoes' com sua função propria para definir (useState)
            definirTransacoes(dados);
        });
    }, []); //no array é onde definimos as dependências do useEffect, ele estando vazio vai chamar apenas uma vez esse método

    //define o tipo de useState como number useState<number>
    //define que esse number começa com o valor 0 useState<number>(0)
    const [ receitasTotal, definirReceitasTotal ] = useState<number>(0);

    //define o tipo de useState como number useState<number>
    //define que esse number começa com o valor 0 useState<number>(0)
    const [ despesasTotal, definirDespesasTotal ] = useState<number>(0);

    //define o tipo de useState como number useState<number>
    //define que esse number começa com o valor 0 useState<number>(0)
    const [ total, definirTotal ] = useState<number>(0);
    
    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-row para que os filhos se separem em linha, justify-center garante que se alinhem centralmente, o uso de % sempre referencia o elemento pai, nesse caso ele usa a largura como referencia para o gap (pois o display é flex-row), vh é usado com referencia a altura da tela, deixando dinamico para  cada altura de tela dos usuarios (view height). acesse 'page.tsx' para entender melhor.
        <div className="flex flex-row justify-center p-[5vh] gap-[10%]">
            {/* foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante a centralidade */}
            <div className="flex flex-col items-center">
                {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                {
                    //é usado o método map dos arrays, para que cada pessoa encontrada nas funções antes do retorno tenham seu cartão mostrado na tela.
                    pessoas.map((pessoa) => {
                        ///retorna a crição do componente de cartão pessoa com as informações buscadas do BD.
                        return <CartaoPessoaCompleto key={pessoa.id || 0} nome={pessoa.nome || ""} idade={pessoa.idade || 0} receitas={pessoa.receitas || 0} despesas={pessoa.despesas || 0}/>
                    })
                }
            </div>

            {/* foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante a centralidade. O uso de % sempre referencia o elemento pai nesse caso ele ocupa 100% da largura do elemento pai. Acesse 'page.tsx' para entender melhor*/}
            <div className="flex flex-col items-center w-[100%]">
                {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                {
                    //é usado o método map dos arrays, para que cada transação encontrada nas funções antes do retorno tenham seu cartão mostrado na tela.
                    transacoes.map((transacao) => {
                        //retorna a crição do componente de cartão transação com as informações buscadas do BD.
                        return <CartaoTransacaoCompleto key={transacao.id || 0} nome={transacao.nome || ""} descricao={transacao.descricao || ""} valor={transacao.valor || 0} tipo={transacao.tipo || ""} pessoaId={transacao.pessoaId || 0}/>
                    })
                }
            </div>

            {/* foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante a centralidade.*/}
            <div className="flex flex-col items-center">
                {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Cálculo Total</h1>
                {/* foi criado uma divisão com flex-col para que os filhos se separem em colunas, justify-center garante a centralidade. O uso de % sempre referencia o elemento pai nesse caso do uso do padding é a largura. acesse 'page.tsx' para entender melhor. */}
                <div className="w-[300px] h-[120px] rounded-[15px] flex flex-col justify-center pl-[1%]">
                    {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Receitas:</b> R$ {}</h3>
                    {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Despesas:</b> R$ {}</h3>
                    {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                    <h3 className="font-[Josefin_Sans] text-[25px] text-white font-regular tracking-[0.085rem]"><b>Saldo:</b> R$ {}</h3>
                </div>
            </div>
        </div>
    );
}