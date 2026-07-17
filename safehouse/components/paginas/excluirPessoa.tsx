//componente: Tela de exclusão de pessoa
//imports do react
//useState para poder trabalhar com salvamento dinâmico de informações ("memória da página")
//useEffect para que os métodos selecionados sejam chamados apenas uma vez e não sobrecarregue a página (ele cuida de tudo que não envolve desenho em telas)
import { useState, useEffect } from "react";

//interfaces
//importa a interface de pessoa, para utilizar corretamente seus atributos
import { Pessoa } from "@/modelos/Pessoa";

//funções
//importa a busca de todas as pessoas
import { BuscarTodasPessoas } from "@/funcionalidades/pessoas/buscarTodasPessoas";
//importa a deleção de pessoa
import { DeletarPessoa } from "@/funcionalidades/pessoas/deletarPessoa";

//ui
//importa cartão de pessoa
import { CartaoPessoaCompletoExcluir } from "../ui/cartaoPessoaCompletoExcluir";

//componente em si
export function ExcluirPessoa() {
    //define o tipo de useState como Pessoa (interface) useState<Pessoa>, pois assim seus atributos são devidamente definidos
    //define que é uma lista de pessoas e não só uma pessoa useState<Pessoa[]>
    //define que essa lista de pessoas que nós vamos usar ao abrir a página começa com uma lista vazia useState<Pessoa[]>([])
    const [ pessoas, definirPessoas ] = useState<Pessoa[]>([]);
    //usa o useEffect para chamar apenas uma vez o método
    useEffect(() => {
        //busca todas as pessoas, quando o retorno for ok, ou seja, deu certo, ele então utiliza o useState para definir o valor de 'pessoas'.
        BuscarTodasPessoas().then(dados => {
            //define 'pessoas' com sua função propria para definir (useState)
            definirPessoas(dados);
        });
    }, []); //no array é onde definimos as dependências do useEffect, ele estando vazio vai chamar apenas uma vez esse método

    //cria uma constante para a deleção chama o metodo assincrono de deletar pessoa para usar o retorno e carregar dinamicamente
    const deletar = async (id: number) => {
        //recebe o valor true se deletou e false se nao
        const delecao = await DeletarPessoa(id);

        //se true então ele define as pessoas filtrando o array de pessoas atual para cada pessoa verifica e seleciona quem não tem o id selecionado
        if(delecao) {
            //define as pessoas usando useState
            definirPessoas(pessoas.filter(pessoa => {
                //filtra com a condição de ser diferente do id excluido
                return pessoa.id != id;
            }));

            console.log(pessoas);
        }
    }

    //return padrao do elemento html do componente
    return(
        //foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante que se alinhem centralmente, cursor=pointer deixa o cursor como apontando para o elemento.
        <div className="flex flex-col items-center cursor-pointer">
            {/* foi criado uma divisão com flex-col para que os filhos se separem em colunas, items-center garante que se alinhem centralmente. */}
            <div className="flex flex-col items-center">
                {/* o h1 é um titulo suas propriedades definem como ele aparece. A fonte importada para o projeto é a Josefin sans para verificar a importação deve checar 'layout.tsx' */}
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Escolha uma pessoa para excluir<br/><b>APENAS UM CLIQUE JÁ EXCLUI!</b></h1>
                {
                    //é usado o método map dos arrays, para que cada pessoa encontrada nas funções antes do retorno tenham seu cartão mostrado na tela.
                    pessoas.map((pessoa) => {
                        //retorna a crição do componente de cartão pessoa com as informações buscadas do BD.
                        return <CartaoPessoaCompletoExcluir key={pessoa.id || 0} nome={pessoa.nome || ""} idade={pessoa.idade || 0} receitas={pessoa.receitas || 0} despesas={pessoa.despesas || 0} aoClicar={() => deletar(pessoa.id || 0)}/>
                    })
                }
            </div>
        </div>
    );
}