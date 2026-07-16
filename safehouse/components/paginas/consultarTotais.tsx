//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";
//importa a busca de todas as transacoes
import { BuscarTodasTransacoes } from "@/funcionalidades/transacoes/buscarTodasTransacoes";
//importa cartão de pessoa
import { CartaoPessoaCompleto } from "../ui/cartaoPessoaCompleto";
//importa cartão de transação
import { CartaoTransacaoCompleto } from "../ui/cartaoTransacaoCompleto";
//importa formatador de número
import { FormatadorNumero } from "@/funcionalidades/geral/formatadorNumero";

//componente que representa a tela de consulta de totais
export function ConsultarTotais() {
    //define a variável pessoas através da busca no arquivo 'buscarTodasPessoas.tsx'
    const pessoas = BuscarTodasPessoas();
    //define a variável transacoes através da busca do arquivo 'buscarTodasTransacoes.tsx'
    const transacoes = BuscarTodasTransacoes();

    //define as variaveis de receitas despesas e total
    var receitas: number = 0;
    var despesas: number = 0;
    var total: number = 0;

    //usa o for each para perciorrer todas transacoes e atualizar os valores de despesas e receitas e totais
    transacoes.forEach((transacao) => {
        if (transacao.tipo?.toLowerCase().trim().includes("receita")) {
            receitas += transacao.valor == null ? 0 : transacao.valor 
        } else if (transacao.tipo?.toLowerCase().trim().includes("despesa")){
            despesas += transacao.valor == null ? 0 : transacao.valor
        }
    })

    //calcula o total (despesas - receitas)
    total = receitas - despesas;
    
    return(
        <div className="flex flex-row justify-center p-[5vh] gap-[10%]">
            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                {
                    //mapeia cada pessoa para criar um cartão pra cada
                    pessoas.map((pessoa) => {
                        //retorna a crição do componente de cartão com as informações buscadas do BD.
                        return <CartaoPessoaCompleto key={pessoa.id || 0} nome={pessoa.nome || ""} idade={pessoa.idade || 0} receitas={pessoa.receitas || 0} despesas={pessoa.despesas || 0}/>
                    })
                }
            </div>

            <div className="flex flex-col items-center w-[100%]">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                {
                    //mapeia cada transacao para criar um cartão pra cada
                    transacoes.map((transacao) => {
                        //retorna a crição do componente de cartão com as informações buscadas do BD.
                        return <CartaoTransacaoCompleto key={transacao.id || 0} nome={transacao.nome || ""} descricao={transacao.descricao || ""} valor={transacao.valor || 0} tipo={transacao.tipo || ""} pessoaId={transacao.pessoaId || 0}/>
                    })
                }
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Cálculo Total</h1>
                <div className="w-[300px] h-[120px] rounded-[15px] flex flex-col justify-center pl-[1%]">
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Receitas:</b> R$ {receitas}</h3>
                    <h3 className="font-[Josefin_Sans] text-[20px] text-white font-regular tracking-[0.085rem]"><b>Despesas:</b> R$ {despesas}</h3>
                    <h3 className="font-[Josefin_Sans] text-[25px] text-white font-regular tracking-[0.085rem]"><b>Saldo:</b> R$ {total}</h3>
                </div>
            </div>
        </div>
    );
}