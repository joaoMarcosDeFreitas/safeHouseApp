//componente: Barra lateral
//ui
//importa o componente de botão da barra lateral.
import { BotaoBarraLateral } from "./botaoBarraLateral"

//o parametro define uma função que retorna void e que possui um parametro interno de string pois ele se comunica diretamente com a função 'definirTela' que é do useState<string> definido no arquivo 'page.tsx' ela é usada para mudar o valor de telaAtual que sempre deve ser string nesse caso. Cada botão que é um elemento do arquivo 'botaoBarraLateral.tsx' pede um atributo 'aoClicar' que se observar no arquivo mencionado indica um parametro do tipo função, com retorno void ele recebe justamente a função do parametro deste componente
//componente em si
export function BarraLateral({ aoClicar }: { aoClicar: (botaoClicado: string) => void }) {
    //return padrao do elemento html do componente
    return(
        //aside é usado para indicar um elemento que fica na lateral. foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante que se alinhem centralmente, o uso de % sempre referencia o elemento pai, nesse caso ele usa a altura como referencia para o gap (pois o display é flex-col), vw é usado com referencia a largura da tela, deixando dinamico para cada largura de tela dos usuarios (view width), vh é usado com referencia a altura da tela, deixando dinamico para  cada altura de tela dos usuarios (view height). acesse 'page.tsx' para entender melhor.
        <aside className="flex flex-col w-[15vw] h-[100vh] bg-[#2D1D71] items-center gap-[10%] rounded-b-[25px]">
            {/* define a logo usada na barra lateral com margin no topo de 25 pixels */}
            <img src="/images/logo.png" width={85} height={98} alt="Logo da safehouse, uma casa roxa, com telhado verde escuro, no meio da casa há uma janela com símbolo de cifrão $, abaixo está escrito em pixelArt 'Safe House'" className="mt-[25px]"/>

            {/* é criado uma divisão com o componente BotaoBarraLateral que serve como molde para os botões de navegação. é usado flex-col para que os filhos se separem em colunas e items-center garante a centralidade */}
            <div className="flex flex-col gap-[23px] items-center">
                {/* Para cada botão, é passado o atributo aoClicar que é pedido no componente, seu valor é exatamente o parametro deste componente, com o parametro interno de string indicando qual o valor que vai ser passado em 'telaAtual'. paraentender melhor acesse 'page.tsx' e 'botaoBarraLateral.tsx' */}
                <BotaoBarraLateral texto="Registrar Pessoa" aoClicar={() => aoClicar("registrarPessoa")}/>
                <BotaoBarraLateral texto="Excluir Pessoa" aoClicar={() => aoClicar("excluirPessoa")}/>
                <BotaoBarraLateral texto="Registrar Transação" aoClicar={() => aoClicar("registrarTransacao")}/>
                <BotaoBarraLateral texto="Menu Inicial" aoClicar={() => aoClicar("menuInicial")}/>
                <BotaoBarraLateral texto="Consultar Totais" aoClicar={() => aoClicar("consultarTotais")}/>
            </div>
        </aside>
    )
}