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

        //construtor
        public Pessoa(int id, string nome, int idade)
        {
            this.Id = id;
            this.Nome = nome;
            this.Idade = idade;
        }
    }
}