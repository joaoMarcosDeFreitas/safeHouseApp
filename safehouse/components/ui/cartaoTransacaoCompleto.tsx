//componente de cartão de transação completo com todas informações
export function CartaoTransacaoCompleto({ nome, valor, pessoa }: { nome: string, valor: number, pessoa: string }) {
    
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
        <div className="w-[300px] h-[60px] rounded-[15px] flex flex-row justify-around items-center gap-[5%] border-[1px] border-white">
            <div className="flex flex-col">
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Nome:</b> {nome}</h3>
                <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]"><b>Pessoa:</b> {pessoa}</h3>
            </div>
            <h3 className="font-[Josefin_Sans] text-[14px] text-white font-regular tracking-[0.085rem]">R$ {resultado.format(valor)}</h3>
        </div>
    );
}