namespace safeHouseBackend.Models
{
    //cria a classe transação
    public class Transacao
    {
        //id da transação
        public int Id { get; set; }
        //nome da transação
        public string Nome { get; set; }
        //descrição da transação
        public string Descricao { get; set; }
        //valor da transação
        public decimal Valor { get; set; }
        //tipo da transação
        public string Tipo { get; set; }
        //id da pessoa associada a transacao
        public int PessoaId { get; set; }
        //atributo do tipo Pessoa, para poder referenciar ao modelo Pessoa
        public Pessoa? Pessoa { get; set; }

        //construtor
        public Transacao(int id, string nome, string descricao, decimal valor, string tipo, int pessoaId)
        {
            this.Id = id;
            this.Nome = nome;
            this.Descricao = descricao;
            this.Valor = valor;
            this.Tipo = tipo;
            this.PessoaId = pessoaId;
        }
    }
}