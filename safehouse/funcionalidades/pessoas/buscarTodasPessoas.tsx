//funcionalidade de requisição para pegar todas as pessoas, serve para deixar organizado e unificado em um lugar (reaproveitável)
//importa o useEffect e useState para o react saber que temos memória e interações
import { useState, useEffect } from "react";
//importa a interface de pessoa, para utilizar corretamente seus atributos
import { Pessoa } from "@/modelos/Pessoa";

export function BuscarTodasPessoas() {
    //isso aqui além de inicializar o userstate como array vazio []. Também indica que o userState é uma lista de pessoas '<Pessoa[]>
    const [ pessoas, definirPessoas ] = useState<Pessoa[]>([]);

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
        })
    }, []); // o colchete vazio indica que será rodado apenas uma vez.
    
    return pessoas;
}