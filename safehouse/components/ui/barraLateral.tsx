//importa o componente botão para compor a barra.
import { BotaoBarraLateral } from "./botaoBarraLateral"

//cria a barra lateral fixa para todas áreas da interface. Possui um parâmetro do tipo função, que serve para usar a função 'definirTela' para mudar o valor de 'telaAtual'
export function BarraLateral({ aoClicar }: { aoClicar: (botaoClicado:string) => void }) {
    return(
        //define e estiliza a barra lateral e seus componentes
        <aside className="flex flex-col w-[15vw] h-[100vh] bg-[#2D1D71] items-center gap-[10%]">
            {/* define a logo usada na barra lateral */}
            <img src="/images/logo.png" width={85} height={98} alt="Logo da safehouse, uma casa roxa, com telhado verde escuro, no meio da casa há uma janela com símbolo de cifrão $, abaixo está escrito em pixelArt 'Safe House'" className="mt-[25px]"/>

            {/* define a divisão dos botões laterais */}
            <div className="flex flex-col gap-[23px] items-center">
                {/* Para cada botão, usa a função 'definirTela' com o parâmetro indicando qual tela está sendo chamada */}
                <BotaoBarraLateral texto="Registrar Pessoa" aoClicar={() => aoClicar("registrarPessoa")}/>
                <BotaoBarraLateral texto="Excluir Pessoa" aoClicar={() => aoClicar("excluirPessoa")}/>
                <BotaoBarraLateral texto="Registrar Transação" aoClicar={() => aoClicar("registrarTransacao")}/>
                <BotaoBarraLateral texto="Menu Inicial" aoClicar={() => aoClicar("menuInicial")}/>
                <BotaoBarraLateral texto="Consultar Totais" aoClicar={() => aoClicar("consultarTotais")}/>
            </div>
        </aside>
    )
}