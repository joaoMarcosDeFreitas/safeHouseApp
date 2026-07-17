//componente: Função de deleção de pessoa, usado separadamente para reutilzação e organização
//async define o método como assincrono
//o parametro serve para definir o ID passado no caminho da URL
export async function DeletarPessoa(id: number) {
    //usa o 'then' para aguardar o retorno que o fetch traz (nesse caso do DELETE o tipo é uma resposta ou seja o status da requisição, por isso podemos usar resposta.Ok())
    //a url é localhost pois é onde o backend está hospedado. O caminho é definido no projeto backend (/api/pessoa)
    return fetch(`http://localhost:5004/api/pessoa/${id}`, {
        //define o metodo como DELETE
        method: "DELETE",
        //define o conteúdo do header (INDICA PARA O .NET QUE É UM CONTEUDO JSON)
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resposta => { //o 'then' é usado para esperar a requisição ocorrer, e ai sim processar sua resposa. o parâmetro resposta serve para lidar com a resposta
        //verifica se a resposa foi ok ou se deu erro
        if(!resposta.ok) {
            //alerta na tela indicando que deu errado
            alert("Erro ao deletar pessoa.");
            return false;
        } else {
            alert("Pessoa deletada com sucesso.");
            return true;
        }
    });
}