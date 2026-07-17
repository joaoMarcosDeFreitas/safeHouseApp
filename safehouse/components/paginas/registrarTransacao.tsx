//componente: Tela de registro de transação
//imports do react
//useState para poder trabalhar com salvamento dinâmico de informações ("memória da página")
//useEffect para que os métodos selecionados sejam chamados apenas uma vez e não sobrecarregue a página (ele cuida de tudo que não envolve desenho em telas)
//SubmitEvent para poder lidar com respostas de formulário
import { useState, useEffect, SubmitEvent } from "react";

//interfaces
//importa a interface de pessoa, para utilizar corretamente seus atributos
import { Pessoa } from "@/modelos/Pessoa";

//ui
//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";
//importa o componente de opção de pessoa
import { OpcaoPessoa } from "../ui/opcaoPessoa";

//funções
//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";
//importa registro de transação
import { RegistrarTransacaoFunc } from "@/funcionalidades/transacoes/registrarTransacaoFunc";

//componente em si
export function RegistrarTransacao() {
    //define o tipo de useState como Pessoa (interface) useState<Pessoa>, pois assim seus atributos são devidamente definidos
    //define que é uma lista de pessoas e não só uma pessoa useState<Pessoa[]>
    //define que essa lista de pessoas que nós vamos usar ao abrir a página começa com uma lista vazia useState<Pessoa[]>([])
    const [ pessoas, definirPessoas ] = useState<Pessoa[]>([]);
    //usa o useEffect para chamar apenas uma vez o método
    useEffect(() => {
        //busca todas as transações, quando o retorno for ok, ou seja, deu certo, ele então utiliza o useState para definir o valor da transação.
        BuscarTodasPessoas().then(dados => {
            //define 'transacoes' com sua função propria para definir (useState)
            definirPessoas(dados);
        });
    }, []); //no array é onde definimos as dependências do useEffect, ele estando vazio vai chamar apenas uma vez esse método

    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {
        //prevent default é uma das funcionalidades classicas do submit event, ela impede a página de recarregar ao enviar formulário.
        e.preventDefault();

        //busca os dados do formulário enviado
        const dados = new FormData(e.currentTarget);

        //define os atributos que devem ser registrados, o dados.get é justamente o que busca o valor enviado no formulário
        const nome = dados.get("nome") || ""
        const descricao = dados.get("descricao") || "";
        const valor = dados.get("valor") || "";
        const tipo = dados.get("tipo") || "";
        const pessoaId = dados.get("pessoaId") || "";

        //registra a transação
        RegistrarTransacaoFunc(nome.toString(), descricao.toString(), Number.parseFloat(valor.toString()), tipo.toString(), Number.parseInt(pessoaId.toString()));
    }

    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante que se alinhem centralmente, o uso de vh sempre referencia a altura da tela (view height) deixando dinâmico para tamanhos diferentes.
        <div className="flex flex-col items-center mt-[5vh] gap-[10vh]">
            {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Registrar Transação</h1>
            {/* form para capturar os dados necessários para criação de transação */}
            <form className="flex flex-col gap-[20px] w-[50%]" onSubmit={respostaForm}>
                {/* o input text de nome pede um nome e já valida com o proprio HTML se o tamanho é inferior a 3. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <input minLength={3} type="text" name="nome" placeholder="Nome" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] pl-[5%] border-b-[1px]"/>   
                {/* o textarea de descrição pede uma descrição e já valida com o proprio HTML se o tamanho é inferior a 3 e que não pode passar de 35 (impedindo descrições enormes). A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <textarea minLength={3} maxLength={35} placeholder="Descrição" name="descricao" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] h-[100px] pl-[5%] pr-[5%] border-b-[1px]"/>   
                {/* o input number de valor pede um valor e já valida com o proprio HTML se o valor é inferior a 1 e menor que 1 trilhão (limite do sistema definido pelo dev). A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <input min={1} max={1000000000000} type="number" name="valor" placeholder="Valor" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[40%] pl-[5%] border-b-[1px]"/> 
                {/* Dropdown para escolher tipo de transação */}
                <select name="tipo" className="font-[Josefin_Sans] text-white font-light tracking-[0.085rem]">
                    <option className="bg-[#08002B]" value="none" disabled>Escolha o tipo</option>
                    <option className="bg-[#08002B]" value="Receita">Receita</option>
                    <option className="bg-[#08002B]" value="Despesa">Despesa</option>
                </select>  
                {/* Dropdown para escolher a pessoa responsável */}
                <select name="pessoaId" className="font-[Josefin_Sans] text-white font-light tracking-[0.085rem]">
                    <option className="bg-[#08002B]" value="none" disabled>Escolha a pessoa</option>
                    {
                        //mapeia cada pessoa para criar um cartão pra cada
                        pessoas.map((pessoa) => {
                            //retorna a criação do componente de cartão com as informações buscadas do BD.
                            return <OpcaoPessoa key={pessoa.id || 0} nome={pessoa.nome || ""} id={pessoa.id || 0}/>
                        })    
                    }
                </select>  
                {/* É usado o componente padrão de botão do aplicativo. acesse 'botaoRegistrar.tsx' para entender melhor */}
                <BotaoRegistrar/>
            </form> 
        </div>
    );
}