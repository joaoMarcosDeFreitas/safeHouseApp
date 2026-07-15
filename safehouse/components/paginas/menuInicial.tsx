//importa a prévia do cartão de pessoa
import { CartaoPessoaPrevia } from "../ui/cartaoPessoaPrevia";
//importa a prévia do cartão de transação
import { CartaoTransacaoPrevia } from "../ui/cartaoTransacaoPrevia";
//indica para o react que a tela terá memória e interação, além de garantir o necessário para realizar requisições
import { useState, useEffect } from "react";

//componente da tela de menu inicial
export function MenuInicial({ aoClicar }: { aoClicar: (botaoClicado: string) => void }) {
    //define variaveis para trahalhar com a memoria da pagina. pessoas é o valor que queremo usar para manipular dados, e definirPessoas é quem define o valor de pessoas.
    const [ pessoas, definirPessoas ] = useState("");
    const [ erroPessoas, definirErroPessoas ] = useState("");

    //use effect vai buscar apenas uma vez quando a página for carregada
    useEffect(() => {
        //URL do backend para requisição
        fetch("http://localhost:5004/api/pessoa").then(resposta => {
            //verifica se a resposta deu errado
            if (!resposta.ok) {
                //joga um erro sobre a falha na busca
                throw new Error("Não foi possível buscar as pessoas");
            }

            //retorna a resposta em JSON.
            return resposta.json();
        }).then(dados => {
            //salva os dados buscados quando der ccerto
            definirPessoas(dados);
        }).catch(erro => {
            //trata erros de conexão e outras falhas
            definirErroPessoas(erro);
        });
    }, []); // o colchete vazio indica que será rodado apenas uma vez.

    return(
        <div className="flex flex-row justify-center p-[5vh] gap-[10%] h-[100vh]">
            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Pessoas:</h1>
                {
                    
                }
                <h3 onClick={() => aoClicar("todasPessoas")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>

            <img src="/images/linha.png" alt="Linha de divisão entre os tópicos." className="h-[100%]"/>

            <div className="flex flex-col items-center">
                <h1 className="font-[Josefin_Sans] text-[25px] text-white font-bold tracking-[0.085rem]">Transações:</h1>
                <CartaoTransacaoPrevia nome="Mark 42" valor={Number("1231232312")}/>
                <h3 onClick={() => aoClicar("todasTransacoes")} className="font-[Josefin_Sans] text-[16px] text-white font-bold tracking-[0.085rem] mt-[20%] cursor-pointer"><u>Ver Tudo</u></h3>
            </div>
        </div>
    );
}