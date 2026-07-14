using Microsoft.EntityFrameworkCore;
using safeHouseBackend.Models;
using System.Data.Entity;
using System.Collections.Generic;

namespace safeHouseBackend.Data
{
    //aqui é herdado o DbContext para conseguir utilizar as principais funcionalidades do EF core.
    public class AplicativoDbContext: DbContext
    {
        //construtor para configuração da dependência (usar SQLite etc)
        public AplicativoDbContext(DbContextOptions<AplicativoDbContext> Options): base(Options)
        {
        }

        //
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Transacao> Transacoes { get; set; }

    }
}
