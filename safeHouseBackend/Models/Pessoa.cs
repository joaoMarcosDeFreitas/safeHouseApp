namespace safeHouseBackend.Models
{
    //cria a classe pessoa
    public class Pessoa
    {
        //id da pessoa
        public int Id { get; set; }
        //nome da pessoa
        public string Nome { get; set; }
        //idade da pessoa
        public int Idade { get; set; }
        //receitas da pessoa
        public decimal Receitas { get; set; }
        //despesas da pessoa
        public decimal Despesas { get; set; }
        //booleano para indicar se pode ou não ter receita
        public bool podeTerReceita { get; set; }

        //construtor
        public Pessoa(int id, string nome, int idade, decimal receitas, decimal despesas, bool podeTerReceita)
        {
            this.Id = id;
            this.Nome = nome;
            this.Idade = idade;
            this.Receitas = receitas;
            this.Despesas = despesas;
            this.podeTerReceita = podeTerReceita;
        }
    }
}