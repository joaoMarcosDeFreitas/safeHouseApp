//importa cartão de pessoa completo com todas as informções
import { CartaoPessoaCompleto } from "../ui/cartaoPessoaCompleto";

//componente de tela de exclusão de pessoas
export function ExcluirPessoa() {
    return(
        <div className="flex flex-col items-center cursor-pointer">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Escolha a pessoa que vai excluir:</h1>
            <CartaoPessoaCompleto nome="Tony Stark" idade={45} despesas={4200000000} receitas={5600000000}/>
        </div>
    );
}