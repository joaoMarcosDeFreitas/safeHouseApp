//componente para select/option da página de registrar transação
export function OpcaoPessoa({ id, nome }: { id: number, nome: string }) {
    return(
        <option className="bg-[#08002B]" value={id}>{nome}</option>
    );
}