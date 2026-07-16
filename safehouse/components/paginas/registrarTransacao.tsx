//indica para o react que usará Submit Event para pegar inputs do formulário.
import { SubmitEvent } from "react";

//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";

//importa o componente de opcção de pessoa
import { OpcaoPessoa } from "../ui/opcaoPessoa";

//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";

//importa registro de transações
import { RegistrarTransacaoFunc } from "@/funcionalidades/transacoes/registrarTransacaoFunc";

//componente de página para registro de transação.
export function RegistrarTransacao() {
    //define a variável pessoas através da busca no arquivo 'buscarTodasPessoas.tsx'
    const pessoas = BuscarTodasPessoas();

    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        //busca os dados do formulário enviado
        const dados = new FormData(e.currentTarget);

        //atribui valor as variavesi com os dados enviados
        const nome = dados.get("nome") || ""
        const descricao = dados.get("descricao") || "";
        const valor = dados.get("valor") || "";
        const tipo = dados.get("tipo") || "";
        const pessoaId = dados.get("pessoaId") || "";

        //registra a transação
        RegistrarTransacaoFunc(nome.toString(), descricao.toString(), Number.parseFloat(valor.toString()), tipo.toString(), Number.parseInt(pessoaId.toString()));
    }

    return(
        //usado design flex para ordenar e garantir simetria
        <div className="flex flex-col items-center mt-[5vh] gap-[10vh]">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Registrar Transação</h1>
            {/* form para capturar o nome e a idade */}
            <form className="flex flex-col gap-[20px] w-[50%]" onSubmit={respostaForm}>
                <input minLength={3} type="text" name="nome" placeholder="Nome" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] pl-[5%] border-b-[1px]"/>   
                <textarea minLength={3} maxLength={35} placeholder="Descrição" name="descricao" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] h-[100px] pl-[5%] pr-[5%] border-b-[1px]"/>   
                <input min={1} max={1000000000000} type="number" name="valor" placeholder="Valor" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[40%] pl-[5%] border-b-[1px]"/> 
                {/* Dropdown para escolher tipo de traansação */}
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
                            //retorna a crição do componente de cartão com as informações buscadas do BD.
                            return <OpcaoPessoa key={pessoa.id || 0} nome={pessoa.nome || ""} id={pessoa.id || 0}/>
                        })    
                    }
                </select>  
                <BotaoRegistrar/>
            </form> 
        </div>
    );
}