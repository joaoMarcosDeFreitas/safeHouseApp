//importa o componente de cartão de transação completo
import { CartaoTransacaoCompleto } from "../ui/cartaoTransacaoCompleto";

//componente da tela de todas as transações
export function TodasAsTransacoes() {
    return(
        <div className="flex flex-col items-center">
            <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
            <CartaoTransacaoCompleto nome="Mark 42" valor={1231232312} pessoa="Tony Stark"/>
        </div>
    );
}