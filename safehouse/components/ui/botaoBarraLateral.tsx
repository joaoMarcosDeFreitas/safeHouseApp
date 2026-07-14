//cria botão do menu lateral com parâmetro para texto do mesmo. Além disso, também há o parâmetro clicado que condiz com uma função de click do usuário neste mesmo botão.
export function BotaoBarraLateral({ texto, aoClicar } : { texto: string, aoClicar: () => void }) {
    return(
        //ativa a função onClick, definindo então o valor de 'telaAtual' para o que foi passado como parâmetro no componente da barra lateral.
        <button onClick={aoClicar} className="p-4 bg-[#035A90] rounded-[15px] transition duration-250 hover:-translate-y-1 cursor-pointer w-[100%]">
            {/* Estiliza e usa o parâmetro para mostrar texto no botão */}
            <p className="font-[Josefin_Sans] text-[16px] text-white font-light tracking-[0.085rem]">{ texto }</p>
        </button>
    )
}