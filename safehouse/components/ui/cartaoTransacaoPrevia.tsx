//cria a prévia do cartão transação, não é o cartão completo.
export function CartaoTransacaoPrevia({ nome, valor }: { nome: string, valor: number }) {

    //formatador de numero (quebra valores gigantes em abreviações, ex: '1.000.000.000' vira '1.0 bi')
    //pt-BR define a formatação pra portugues brasileiro
    const resultado = new Intl.NumberFormat('pt-BR', {
        //notation define que formata para compactar
        "notation": "compact",
        //compactDisplay indica se a frase pós número é longa ou curta, ex: '1.0  bi' '1.0 bilhão'
        "compactDisplay": "long",
        //define o limite de digitos pós vírgula.
        "maximumFractionDigits": 2
    })

    return(
        <div className="w-[262px] h-[57px] rounded-[15px] flex flex-row justify-center items-center pl-[1%] pr-[1%] gap-[10%] border-[1px] border-white">
            <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Nome:</b> {nome}</h3>
            <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">R$ {resultado.format(valor)}</h3>
        </div>
    );
}