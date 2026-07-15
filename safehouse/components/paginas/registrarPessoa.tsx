//indica para o react que usará Submit Event para pegar inputs do formulário.
import { SubmitEvent } from "react";

//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";

//indica ao react que a página terá memória e interação, além de garantir o necessário para realizar requisições
import { useState } from "react";

//componente de página para registro de pessoa.
export function RegistrarPessoa() {
    //define variaveis para trahalhar com a memoria da pagina. pessoas é o valor que queremo usar para manipular dados, e definirPessoas é quem define o valor de pessoas.
    const [ pessoaErro, definirPessoaErro ] = useState("");

    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {
        //impede formulário de recarregar a página ao ser enviado
        e.preventDefault();

        //buscar dados do evento
        const dados = new FormData(e.currentTarget);

        const nome = dados.get("nome") || "";
        const idade = dados.get("idade") || "";

        const pessoaNova = {
            "nome": nome,
            "idade": idade
        }

        //URL do backend para requisição
        fetch("http://localhost:5004/api/pessoa", {
            //define o metodo POST
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pessoaNova)
        }).catch(erro => {
            //salva resposta de erro da requisição
            definirPessoaErro(erro);
        });
    }

    return(
        //usado design flex para ordenar e garantir simetria
        <div className="flex flex-col items-center mt-[5vh] gap-[10vh]">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Registrar Pessoa</h1>
            {/* form para capturar o nome e a idade */}
            <form className="flex flex-col gap-[20px] w-[50%]" onSubmit={respostaForm}>
                <input type="text" name="nome" minLength={3} maxLength={50} className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] pl-[5%] border-b-[1px]" placeholder="Nome"/>   
                <input type="number" name="idade" min={1} max={120} className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[40%] pl-[5%] border-b-[1px]" placeholder="Idade"/>   
                <BotaoRegistrar/>
            </form> 

            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">{pessoaErro}</h1>
        </div>
    );
}