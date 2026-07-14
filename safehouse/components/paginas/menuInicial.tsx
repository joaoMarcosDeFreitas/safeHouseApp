//importa a prévia do cartão de pessoa
import { CartaoPessoaPrevia } from "../ui/cartaoPessoaPrevia";
//importa a prévia do cartão de transação
import { CartaoTransacaoPrevia } from "../ui/cartaoTransacaoPrevia";

//componente da tela de menu inicial
export function MenuInicial({ aoClicar }: { aoClicar: (botaoClicado: string) => void }) {

    //lógica para busca de nomes no BD.
        
    return(
        <div className="flex flex-row justify-center p-[5vh] gap-[10%] h-[100vh]">
            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                <CartaoPessoaPrevia nome="Tony Stark" idade={45}/>
                <h3 onClick={() => aoClicar("todasPessoas")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>

            <img src="/images/linha.png" alt="Linha de divisão entre os tópicos." className="h-[100%]"/>

            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                <CartaoTransacaoPrevia nome="Mark 42" valor={Number("1231232312")}/>
                <h3 onClick={() => aoClicar("todasTransacoes")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>
        </div>
    );
}