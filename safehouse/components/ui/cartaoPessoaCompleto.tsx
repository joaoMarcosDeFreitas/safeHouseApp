//componente de cartão de pessoa completo com todas as informações
export function CartaoPessoaCompleto({ nome, idade, despesas, receitas }: { nome: string, idade: number, despesas: number, receitas: number }) {
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
        <div className="w-[300px] h-[120px] rounded-[15px] bg-[#D9D9D9] flex flex-col justify-center pl-[1%]">
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Nome:</b> {nome}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Idade:</b> {idade}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Receitas:</b> {resultado.format(receitas)}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Despesas:</b> {resultado.format(despesas)}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Saldo:</b> {resultado.format(saldo)}</h3>
        </div>
    );
}