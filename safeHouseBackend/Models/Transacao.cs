namespace safeHouseBackend.Models
{
    //cria o modelo Transação que é a entidade que representa uma transação financeira.
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
        public Pessoa Pessoa { get; set; }
    }
}