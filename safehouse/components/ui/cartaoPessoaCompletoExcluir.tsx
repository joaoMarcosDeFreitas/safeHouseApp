//componente: Cartão de pessoa completo com todas as informações
//funções
//importa formatador de número
import { FormatadorNumero } from "@/funcionalidades/geral/formatadorNumero";

//os parametros servem para definir os atributos do cartão
//componente em si
export function CartaoPessoaCompletoExcluir({ aoClicar, nome, idade, despesas, receitas }: { nome: string, idade: number, despesas: number, receitas: number, aoClicar: () => void }) {
    //calcular o saldo da pessoa
    const saldo = receitas - despesas;

    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-col para que os filhos se separem em linha, justify-center garante a centralidade, o uso de % sempre referencia o elemento pai, nesse caso ele usa a largura como referencia para padding. acesse 'menuInicial.tsx' ou 'consultarTotais.tsx' para entender melhor sobre os elementos pai desse.
        <div onClick={aoClicar} className="w-[300px] h-[120px] rounded-[15px] bg-[#D9D9D9] flex flex-col justify-center pl-[1%] border-[1px] border-black">
            {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Nome:</b> {nome}</h3>
            {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Idade:</b> {idade}</h3>
            {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx'. Usa o formatador de número (que vem do arquivo 'formatadorNumero.tsx' para formatar o valor e deixar menor -> mais legível) */}
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Receitas:</b> {FormatadorNumero().format(receitas)}</h3>
            {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx'. Usa o formatador de número (que vem do arquivo 'formatadorNumero.tsx' para formatar o valor e deixar menor -> mais legível) */}
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Despesas:</b> {FormatadorNumero().format(despesas)}</h3>
            {/* o h3 é um titulo com menos relevancia que h1 e h2 suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx'. Usa o formatador de número (que vem do arquivo 'formatadorNumero.tsx' para formatar o valor e deixar menor -> mais legível) */}
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Saldo:</b> {FormatadorNumero().format(saldo)}</h3>
        </div>
    );
}