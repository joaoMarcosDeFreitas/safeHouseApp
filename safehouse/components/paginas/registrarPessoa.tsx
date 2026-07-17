//componente: Tela de registro de pessoa
//imports do react
//SubmitEvent para poder lidar com respostas de formulário
import { SubmitEvent } from "react";

//ui
//importa botão de registro
import { BotaoRegistrar } from "../ui/botaoRegistrar";

//funções
//importa registro de pessoa
import { RegistrarPessoaFunc } from "@/funcionalidades/pessoas/registrarPessoaFunc";

//componente em si
export function RegistrarPessoa() {
    //função para lidar com o envio do formulário. 'e' é o evento que é uma variável do tipo SubmitEvent, o tipo genérico é usado para especificar como SubmitEvent vai definir seus parâmetros, ex: só é possível usar e.currentTarget, quando definimos que SubmitEvent tem o tipo genérico HTMLFormElement (ou seja é um formulário que estamos lidando)
    const respostaForm = (e: SubmitEvent<HTMLFormElement>) => {
        //prevent default é uma das funcionalidades classicas do submit event, ela impede a página de recarregar ao enviar formulário.
        e.preventDefault();

        //busca os dados do formulário enviado
        const dados = new FormData(e.currentTarget);

        //define os atributos que devem ser registrados, o dados.get é justamente o que busca o valor enviado no formulário
        const nome = dados.get("nome") || "";
        const idade = dados.get("idade") || "";

        //registra a pessoa
        RegistrarPessoaFunc(nome.toString(), Number.parseInt(idade.toString()));
    }

    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-col para separar os filhos em colunas. items-center garante que se alinhem centralmente. vh é usado com referencia a altura da tela, deixando dinamico para  cada altura de tela dos usuarios (view height)
        <div className="flex flex-col items-center mt-[5vh] gap-[10vh]">
            {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Registrar Pessoa</h1>
             {/* form para capturar os dados necessários para criação de pessoa */}
            <form className="flex flex-col gap-[20px] w-[50%]" onSubmit={respostaForm}>
                {/* o input text de nome pede um nome e já valida com o proprio HTML se o tamanho é inferior a 3. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <input type="text" name="nome" minLength={3} maxLength={50} className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[100%] pl-[5%] border-b-[1px]" placeholder="Nome"/>   
                {/* o input number de idade pede uma idade e já valida com o proprio HTML se o valor é inferior a 1 e menor que 120 (limite do sistema definido pelo dev). A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <input type="number" name="idade" min={1} max={120} className="font-[Josefin_Sans] text-[18px] text-white font-light tracking-[0.085rem] w-[40%] pl-[5%] border-b-[1px]" placeholder="Idade"/>   
                {/* É usado o componente padrão de botão do aplicativo. acesse 'botaoRegistrar.tsx' para entender melhor */}
                <BotaoRegistrar/>
            </form> 
        </div>
    );
}