//componente: Opção de pessoa para select
//são criados de acordo com a quantidade de pessoas no BD
//os parametros servem para definir os atributos do option, valor e texto mostrado
//componente em si
export function OpcaoPessoa({ id, nome }: { id: number, nome: string }) {
    //return padrao do elemento html do componente
    return(
        // define o background com a cor em hexadecimal
        <option className="bg-[#08002B]" value={id}>{nome}</option>
    );
}