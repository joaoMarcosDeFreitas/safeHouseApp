//indica para o react que usará Submit Event para pegar inputs do formulário.
import { SubmitEvent } from "react";

//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";

//importa a requisição ao backend com post de pessoa.
import { RegistrarPessoaFunc } from "@/funcionalidades/pessoas/registrarPessoaFunc";

//componente de página para registro de pessoa.
export function RegistrarPessoa() {

    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {
        //não deve ser retirado o recarregamento da página, para tentar minimizar a possiobilidade do usuario clicar várias vezes no mesmo botão

        //buscar dados do evento
        const dados = new FormData(e.currentTarget);

        //busca nome e idade informados e salva
        const nome = dados.get("nome") || "";
        const idade = dados.get("idade") || "";

        //chama a requisição de registrar pessoa ela retorna o mesmo retorno do método fetch, usando o 'then' podemos garantir que a resposta seja tratada
        RegistrarPessoaFunc(nome.toString(), Number.parseInt(idade.toString())).then((resposta) => {
            //verifica se a resposa foi ok ou se deu erro
            if(resposta.ok) {
                //alerta na tela indicando que deu certo
                alert("Pessoa registrada com sucesso!");
            } else {
                //alerta na tela indicando que deu errado
                alert("Erro ao registrar pessoa, tente novamente.");
            }
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
        </div>
    );
}