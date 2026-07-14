//importa o componente de cartão de pessoa completo
import { CartaoPessoaCompleto } from "../ui/cartaoPessoaCompleto";

//componente de tela de todas as pessoas
export function TodasAsPessoas() {
    return(
        <div className="flex flex-col items-center">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
            <CartaoPessoaCompleto nome="Tony Stark" idade={45} despesas={4200000000} receitas={5600000000}/>
        </div>
    );
}