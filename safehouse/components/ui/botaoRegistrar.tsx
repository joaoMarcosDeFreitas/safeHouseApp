//componente: Botão de registrar
//componente em si
export function BotaoRegistrar() {
    //return padrao do elemento html do componente
    return(
        //botão de registro. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx'. o uso de % sempre referencia o elemento pai nesse é a largura. Acesse 'registrarPessoa.tsx' e 'registrarTransacao.tsx' para entender melhor sobre os elementos pai desse
        <button className="p-1 bg-[#035A90] rounded-[15px] transition duration-250 hover:-translate-y-1 cursor-pointer w-[100%] font-[Josefin_Sans] text-[16px] text-white font-light tracking-[0.085rem]" type="submit">Registrar</button>
    );
}