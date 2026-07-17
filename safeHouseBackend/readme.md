# Introdução ao Back-End do Safe House

Este é o back-end do projeto para controle de gastos financeiros de casas. Permite gerenciar pessoas, transações (receitas/despesas) e visualizar o balanço financeiro individual e geral.

---

## 1. Tecnologias necessárias 💻

- Para o projeto foram utilizadas:
	- **.NET 9.0:** deve baixar para compilar e rodar a API.
	- **Git:** Para clonar o repositório.

## 2. Tecnologias de banco de dados necessárias 🎲

- Para o projeto foram utilizadas:
	- **Entity Framework Core:** deve baixar para que o projeto rode sem problemas.
	- **SQLite:** Junto com o EF Core garantem clareza na comunicação front-back e persistência de dados ao fechar e abrir a aplicação.

## 3. Regras

- Conforme solicitado existem regras para atuação no projeto:
	- **Pessoas:**
		- Criação, listagem e deleção impletados.
		- Id's automáticos gerados na criação.
		- Exclusão de transações em cascata com a deleção de pessoa (configuração do banco de dados com chave estrangeira)
	- **Transações:**
		- Criação e listagem.
		- Id's automáticos gerados na criação.
		- Impossibilidade de menores de 18 criarem receitas (apenas despesas).
		- Não pode registrar transação sem ter pessoa para associar.

## 4. Resumo de uso das tecnologias do back-end:

- **.NET 9 (C#)**
- **ASP.NET Core Web API**
- **Entity Framework Core**
- **SQLite**