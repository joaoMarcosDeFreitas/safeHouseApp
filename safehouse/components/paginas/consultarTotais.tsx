//importa o cartão completo de pessoa
import { CartaoPessoaCompleto } from "../ui/cartaoPessoaCompleto";
//importa o cartão completo de transação
import { CartaoTransacaoCompleto } from "../ui/cartaoTransacaoCompleto";

//componente de tela de consulta de totais
export function ConsultarTotais({ aoClicar, receitas, despesas }: { aoClicar: (botaoClicado: string) => void, receitas: number, despesas: number }) {
    //calcular o saldo
    const saldo = receitas - despesas;

    //formatador de numero (quebra valores gigantes em abreviações, ex: '1.000.000.000' vira '1.0 bi')
    //pt-BR define a formatação pra portugues brasileiro
    const resultado = Intl.NumberFormat('pt-br', {
        "compactDisplay": "short",
        "notation": "compact",
        "maximumFractionDigits": 2
    })
    
    return(
        <div className="flex flex-row justify-center p-[5vh] h-[100vh] gap-[5%]">
            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                <CartaoPessoaCompleto nome="Tony Stark" idade={45} despesas={4200000000} receitas={5600000000}/>
                <h3 onClick={() => aoClicar("todasPessoas")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>
    
            <img src="/images/linha.png" alt="Linha de divisão entre os tópicos." className="h-[100%]"/>
    
            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                <CartaoTransacaoCompleto nome="Mark 42" valor={1231232312} pessoa="Tony Stark"/>
                <h3 onClick={() => aoClicar("todasTransacoes")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>

            <img src="/images/linha.png" alt="Linha de divisão entre os tópicos." className="h-[100%]"/>

            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Cálculo Total</h1>
                <div className="w-[300px] h-[120px] rounded-[15px] flex flex-col justify-center pl-[1%]">
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Receitas:</b> {resultado.format(receitas)}</h3>
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Despesas:</b> {resultado.format(despesas)}</h3>
                    <h3 className="font-[Josefin_Sans] text-[25px] text-white font-regular tracking-[0.085rem]"><b>Saldo:</b> {resultado.format(saldo)}</h3>
                </div>
            </div>
        </div>
    );
}