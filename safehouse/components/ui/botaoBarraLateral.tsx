//componente: Botão da barra lateral
//os parametros definem o texto exibido no elemento HTML e uma função que retorna void ela serve como uma mascara para ser passada a função pelo arquivo 'barraLateral.tsx' acesse o mesmo para entender a ordem de chamada.
//componente em si
export function BotaoBarraLateral({ texto, aoClicar } : { texto: string, aoClicar: () => void }) {
    //return padrao do elemento html do componente
    return(
        //ativa a função onClick, passando a função do parametro como função a ser ativada no clique no botão
        //usa o valor de texto vindo do parametro para definir o texto do botão
        <button onClick={aoClicar} className="p-4 bg-[#035A90] rounded-[15px] transition duration-250 hover:-translate-y-1 cursor-pointer w-[100%] font-[Josefin_Sans] text-[16px] text-white font-light tracking-[0.085rem]">{ texto }</button>
    )
}