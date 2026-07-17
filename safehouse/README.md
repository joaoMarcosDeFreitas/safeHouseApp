# Introdução ao Front-End do Safe House

Este é o front-end do projeto para controle de gastos financeiros de casas. Permite gerenciar pessoas, transações (receitas/despesas) e visualizar o balanço financeiro individual e geral.

---

## 1. Tecnologias necessárias 💻

- Para o projeto foram utilizadas:
    - **Framework:** Next.js 16
    - **Biblioteca:** React 19 -> uso de hooks: *useState e useEffect*
    - **Linguagem:** TypeScript
    - **Estilização:** Tailwind CSS v4
    - **Fonte:** Josefin Sans carregada do next/font/google

## 2. Funcionalidades principais ‼️

- **Menu inicial** com visualização de todas as pessoas e todas as transações.
- **Registrar pessoa** através de formulário simples com nome e idade. -> menor de 18 anos só pode ter despesa e não pode ter receita.  
- **Registrar transação** através de formulário simples com nome, descrição, valor, tipo de transação (receita/despesa) e pessoa associada.
- **Consulta de totais** com painel mostrando todas pessoas seus gastos e receitas e transações com todas as informações e também o somatório de tudo.
- **Excluir pessoa** com simples clique em cima do card na área de exclusão. Junto com a exclusão da pessoa também saem suas transações.

## 3. Estrutura das pastas (organização do projeto)

- Visando a manutenção e organização do código, para que a análise futura possa ser feita de forma clara. O projeto foi organizado em:
|- app/ ### Onde é encontrado informações de estilização global e as rotas (caminhos entre as funcionalidades listadas)
|- components/ 
|   |- paginas/ ### Componentes de página (telas) -> É daqui que page.tsx puxa o carregamento dos elementos visuais que são mostrados em cada funcionalidade.
|   |- ui/ ### Componentes reutilizáveis que servem para compor partes das telas.
|- funcionalidades/ 
|   |- geral/ ### Funcionalidades gerais que não são exclusivas de modelos (pessoa, transacao).
|   |- pessoas/ ### Funcionalidades do modelo pessoa. Para ficar mais fácil a manutenção do que envolve este modelo. Requisições HTTP com fetch
|   |- transacoes/ ### Funcionalidades do modelo transação. Para ficar mais fácil a manutenção do que envolve este modelo. Requisições HTTP com fetch
|- modelos/ ### Aqui são os 'contratos' para que os atributos se mantenham consistente durante todo o projeto.
|- public/ ### Imagens e outras mídias.

## 4. EndPoints

- Para pessoas a url padrão definida no .NET (back-end do projeto acesse a pasta para entender mais) é: http://localhost:5004/api/pessoa. E suas possíveis requisições são:
    - GET -> Sem o ID no caminho da requisição lista todas as pessoas. Com o ID no caminho, lista apenas a pessoa que tem o ID (se houver) (URLBASE/${id}).
    - POST -> Precisa de body seguindo os valores passados no modelo Pessoa.cs no projeto back-end. 
    - PUT -> Precisa de ID no caminho da requisição (URLBASE/${id}) e precisa de body seguindo os valores passados no modelo Pessoa.cs no projeto back-end. 
    - DELETE -> Precisa de ID no caminho da requisição (URLBASE/${id})
- Para transações a url padrão definida no .NET (back-end do projeto acesse a pasta para entender mais) é: http://localhost:5004/api/transacao. E suas possíveis requisições são:
    - GET -> Sem o ID no caminho da requisição lista todas as pessoas. Com o ID no caminho, lista apenas a pessoa que tem o ID (se houver) (URLBASE/${id}).
    - POST -> Precisa de body seguindo os valores passados no modelo Pessoa.cs no projeto back-end. 