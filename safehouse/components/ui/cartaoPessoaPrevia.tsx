//cria a prévia do cartão pessoa, não é o cartão completo.
export function CartaoPessoaPrevia({ nome, idade }: { nome: string, idade: number}) {
    return(
        <div className="w-[262px] h-[57px] rounded-[15px] bg-[#D9D9D9] flex flex-col justify-center pl-[1%]">
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Nome:</b> {nome}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-[#0B0029] font-regular tracking-[0.085rem]"><b>Idade:</b> {idade}</h3>
        </div>
    );
}