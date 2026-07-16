//componente para busca de pessoa, usado separadamente para reutilzação e ortganização
//async define o método como assincrono
export async function BuscarPessoa(id: number) {
    //await garante que espere o fetch
    const pessoa = await fetch(`http://localhost:5004/api/pessoa/${id}`, {
        //define o metodo GET
        method: "GET",
        //define o conteúdo do header (INDICA PARA O .NET QUE É UM CONTEUDO JSON)
        headers: {
            "Content-Type": "application/json"
        }
    });

    return pessoa.json();
}