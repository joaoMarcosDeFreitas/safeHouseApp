//indica para o react que usará Submit Event para pegar inputs do formulário.
import { SubmitEvent } from "react";

//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";

//componente de página para registro de tgransação.
export function RegistrarTransacao() {
    //não deve ser retirado o recarregamento da página, para tentar minimizar a possiobilidade do usuario clicar várias vezes no mesmo botão

    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {

        //busca os dados do formulário enviado
        const dados = new FormData(e.currentTarget);

        const nome = dados.get("nome") || ""
        const descricao = dados.get("descricao") || "";
        const valor = dados.get("valor") || "";
        const tipo = dados.get("tipo") || "";
        const pessoa = dados.get("pessoa") || "";

        const transacaoNova = {
            "nome": nome,
            "descricao": descricao,
            "valor": descricao,
            "tipo": descricao,
            "pessoaId": pessoa,
        }


        fetch("http://localhost:5004/api/transacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    return(
        //usado design flex para ordenar e garantir simetria
        <div className="flex flex-col items-center mt-[5vh] gap-[10vh]">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Registrar Transação</h1>
            {/* form para capturar o nome e a idade */}
            <form className="flex flex-col gap-[20px] w-[50%]" onSubmit={respostaForm}>
                <input minLength={3} type="text" name="nome" placeholder="Nome" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] pl-[5%] border-b-[1px]"/>   
                <textarea minLength={3} maxLength={400} placeholder="Descrição" name="descricao" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] h-[150px] pl-[5%] pr-[5%] border-b-[1px]"/>   
                <input min={1} max={1000000000000} type="number" name="valor" placeholder="Valor" className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[40%] pl-[5%] border-b-[1px]"/> 
                {/* Dropdown para escolher tipo de traansação */}
                <select name="tipo" className="font-[Josefin_Sans] text-white font-light tracking-[0.085rem]">
                    <option className="bg-[#08002B]" value="none" disabled>Escolha o tipo</option>
                    <option className="bg-[#08002B]" value="Receita">Receita</option>
                    <option className="bg-[#08002B]" value="Despesa">Despesa</option>
                </select>  
                {/* Dropdown para escolher a pessoa responsável */}
                <select name="pessoa" className="font-[Josefin_Sans] text-white font-light tracking-[0.085rem]">
                    <option className="bg-[#08002B]" value="none" disabled>Escolha a pessoa</option>
                    
                </select>  
                <BotaoRegistrar/>
            </form> 
        </div>
    );
}