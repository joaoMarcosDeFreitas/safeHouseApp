//componente: Cartão de transação completo com todas as informações
//imports do react
//useState para poder trabalhar com salvamento dinâmico de informações ("memória da página")
//useEffect para que os métodos selecionados sejam chamados apenas uma vez e não sobrecarregue a página (ele cuida de tudo que não envolve desenho em telas)
import { useState, useEffect } from "react";

//funções
//importa a busca de pessoa
import { BuscarPessoa } from "@/funcionalidades/pessoas/buscarPessoa";
//importa formatador de número
import { FormatadorNumero } from "@/funcionalidades/geral/formatadorNumero";

//os parametros servem para definir os atributos do cartão
//componente em si
export function CartaoTransacaoCompleto({ nome, descricao, valor, tipo, pessoaId }: { nome: string, descricao: string, valor: number, tipo: string, pessoaId: number }) {
    //define o tipo de useState como string useState<string>
    //define que essa string começa com o valor "Carregando..." useState<string>("Carregando...")
    const [pessoaEscolhida, definirPessoa] = useState<string>("Carregando...");

    //usa o useEffect para chamar apenas uma vez o método
    useEffect(() => {
        //busca todas as pessoas, quando o retorno for ok, ou seja, deu certo, ele então utiliza o useState para definir o valor de 'pessoas'.
        BuscarPessoa(pessoaId).then((dados) => {
            //define 'pessoas' com sua função propria para definir (useState)
            definirPessoa(dados.nome);
        })
    }, []);

    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-row para que os filhos se separem em linha, justify-around garante que se alinhem sempre com o espaçamento igual entre os filhos e metade do espaçamento central nas extremidades, items-center garante a centralidade, o uso de % sempre referencia o elemento pai, nesse caso ele usa a largura como referencia para padding e para a largura do elemento em si a altura esta ajustada para sempre caber os elementos h-fit. acesse 'menuInicial.tsx' ou 'consultarTotais.tsx' para entender melhor sobre os elementos pai desse.
        <div className="w-[100%] h-fit rounded-[15px] flex flex-row justify-around items-center border-[1px] border-white p-[1%]">
            {/* foi criado uma divisão com flex-col para que os filhos se separem em coluna, justify-center e items-center garante a centralidade. */}
            <div className="flex flex-col justify-center items-center">
                {/* o h2 é um titulo com menos relevancia que h1 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h2 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Nome:</b></h2>
                {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{nome}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* o h2 é um titulo com menos relevancia que h1 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h2 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Valor:</b></h2>
                {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx'. Usa o formatador de número (que vem do arquivo 'formatadorNumero.tsx' para formatar o valor e deixar menor -> mais legível) */}
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">R$ {FormatadorNumero().format(valor)}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* o h2 é um titulo com menos relevancia que h1 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h2 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Descricao:</b></h2>
                {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{descricao}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* o h2 é um titulo com menos relevancia que h1 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h2 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Tipo:</b></h2>
                {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{tipo}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                {/* o h2 é um titulo com menos relevancia que h1 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h2 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Pessoa:</b></h2>
                {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">{pessoaEscolhida}</h3>
            </div>
        </div>
    );
}