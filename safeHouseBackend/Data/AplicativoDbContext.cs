using Microsoft.EntityFrameworkCore;
using safeHouseBackend.Models;

namespace safeHouseBackend.Data
{
    //aqui é herdado o DbContext para conseguir utilizar as principais funcionalidades do EF core.
    public class AplicativoDbContext: DbContext
    {
        //construtor para configuração da dependência (usar SQLite etc)
        public AplicativoDbContext(DbContextOptions<AplicativoDbContext> Options): base(Options)
        {
        }

        //define as tabelas que serão mapeadas no meu banco de dados (os atributos são as colunas)
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Transacao> Transacoes { get; set; }

    }
}
