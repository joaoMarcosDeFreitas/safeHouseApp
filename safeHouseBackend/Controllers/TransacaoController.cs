using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using safeHouseBackend.Data;
using safeHouseBackend.Models;

namespace safeHouseBackend.Controllers
{
    [ApiController] //indica que a classe é API REST (para se comunicar com o front)
    [Route("api/transacao")] //indica a rota para consumir a api (rota de url)
    public class TransacaoController : ControllerBase //Herda ControllerBase. Nele possuem métodos mais simplificados para lidarmos com o cabeçalho da requisição
    {
        //Injeção de dependência para consumo do banco de dados
        private readonly AplicativoDbContext _context;
        public TransacaoController(AplicativoDbContext context)
        {
            _context = context;
        }

        //define qual o tipo de requisição deste método. Neste caso é um get all de todas as transações.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transacao>>> BuscarTodasAsTransacoes()
        {
            //busca as transações de forma assincrona com await -> espera a requisição ser feita
            var transacoes = await _context.Transacoes.ToListAsync();

            //retorna a busca feita
            return Ok(transacoes);
        }

        //Define qual o tipo de requisição deste método junto com o path variable. Neste caso é um get com path variable {id} -> ID da transação.
        [HttpGet("{id}")]
        public async Task<ActionResult<Transacao>> BuscarTransacao(int id)
        {
            //busca a transação de forma assincrona com await -> espera a requisição ser feita
            var transacao = await _context.Transacoes.FindAsync(id);

            //Verifica se a busca foi encontrada ou não
            if (transacao == null)
            {
                return NotFound("Transação não encontrada. Verifique o ID e tente de novo.");
            }

            //usa métodos simplificados para retornar a resposta. Neste caso é a transação que foi encontrada, código 200.
            return Ok(transacao);
        }

        //Define qual o tipo de requisição deste método, pede um body para inserir no BD. Neste caso é um post que registra a transação.
        [HttpPost]
        public async Task<ActionResult<Transacao>> RegistrarTransacao([FromBody] Transacao transacaoNova)
        {
            //verifica se o body está null, se sim retorna 400 com a mensagem indicando o erro.
            if (transacaoNova == null)
            {
                return BadRequest("Não é possível adicionar pessoa sem os dados necessários. Por favor, verifique as informações e tente de novo");
            }

            //verifica se tem pessoa associada a trnasação, se não, retorna 400 com a mensagem indicando o erro.
            if (transacaoNova.PessoaId == 0)
            {
                return BadRequest("Toda transação deve ter uma pessoa associada, verifique a pessoa e tente novamente");
            }

            //verifica se a descricao está vazia ou nula, se sim retorna 400 com a mensagem indicando o erro.
            if (string.IsNullOrEmpty(transacaoNova.Descricao.Trim()))
            {
                return BadRequest("Não é possível adicionar pessoa com descrição vazia. Por favor, verifique adescrição e tente de novo");
            }

            //adiciona a pessoa nova no contexto do EF
            _context.Add(transacaoNova);

            //salva as mudanças feitas dentro do BD
            await _context.SaveChangesAsync();

            //retorna codigo 200 de sucesso
            return Ok(transacaoNova);
        }
    }
}
