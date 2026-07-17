using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using safeHouseBackend.Data;
using safeHouseBackend.Models;

namespace safeHouseBackend.Controllers
{
    [ApiController] //indica que a classe é API REST (para se comunicar com o front)
    [Route("api/pessoa")] //indica a rota para consumir a api (rota de url)
    public class PessoaController : ControllerBase //Herda ControllerBase. Nele possuem métodos mais simplificados para lidarmos com o cabeçalho da requisição
    {
        //Injeção de dependência para consumo do banco de dados
        private readonly AplicativoDbContext _context;
        public PessoaController(AplicativoDbContext context)
        {
            _context = context;
        }

        //define qual o tipo de requisição deste método. Neste caso é um get all de todas as pessoas.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> BuscarTodasAsPessoas()
        {
            //busca as pessoas de forma assincrona com await -> espera a requisição ser feita
            var pessoas = await _context.Pessoas.ToListAsync();
            
            //retorna a busca feita
            return Ok(pessoas);
        }

        //Define qual o tipo de requisição deste método junto com o path variable. Neste caso é um get com path variable {id} -> ID da pessoa.
        [HttpGet("{id}")]
        public async Task<ActionResult<Pessoa>> BuscarPessoa(int id)
        {

            //busca a pessoa de forma assincrona com await -> espera a requisição ser feita
            var pessoa = await _context.Pessoas.FindAsync(id);

            // verifia se a busca foi encontrada ou não
            if (pessoa == null)
            {
                //usa os métodos simplificados para retornar a resposta.Neste caso é avisando que  pessoa não foi encontrada, código 404.
                return NotFound("Pessoa não encontrada. Verifique o ID e tente de novo.");
            }

            //usa métodos simplificados para retornar a resposta. Neste caso é a pessoa que foi encontrada, código 200.
            return Ok(pessoa);
        }

        //Define qual o tipo de requisição deste método, pede um body para inserir no BD. Neste caso é um post que registra a pessoa.
        [HttpPost]
        public async Task<ActionResult<Pessoa>> RegistrarPessoa([FromBody] Pessoa pessoaNova) 
        {
            //verifica se o body está null, se sim retorna 400 com a mensagem indicando o erro.
            if (pessoaNova == null)
            {
                return BadRequest("Não é possível adicionar pessoa sem os dados necessários. Por favor, verifique as informações e tente de novo");
            }

            //verifica se a idade é igual ou inferior a 0, se sim retorna 400 com a mensagem indicando o erro.
            if (pessoaNova.Idade <= 0)
            {
                return BadRequest("Não é possível adicionar pessoa com idade menor ou igual a 0. Por favor, verifique a idade e tente de novo");
            }

            //verifica se o nome está vazio ou nulo, se sim retorna 400 com a mensagem indicando o erro.
            if (string.IsNullOrEmpty(pessoaNova.Nome.Trim()))
            {
                return BadRequest("Não é possível adicionar pessoa com nome vazio. Por favor, verifique o nome e tente de novo");
            }

            //adiciona a pessoa nova no contexto do EF
            _context.Add(pessoaNova);

            //salva as mudanças feitas dentro do BD
            await _context.SaveChangesAsync();

            //retorna o status de sucesso 200
            return Ok(pessoaNova);
        }

        //Define qual o tipo de requisição deste método, pede um body atualizar no BD. Neste caso é um update que atualiza a pessoa.
        [HttpPut("{id}")]
        public async Task<ActionResult<Pessoa>> AtualizarPessoaReceitasEDespesas(int id, [FromBody] Pessoa pessoaNova)
        {
            //pega a pessoa do BD para atualização
            var pessoa = _context.Pessoas.Find(id);

            //se a pessoa for nula (não achou no BD) retorna not found para avisar que não achou
            if (pessoa == null)
            {
                return NotFound();
            }

            //altera apenas receitas e despesas

            if (pessoaNova.Receitas != 0)
            {
                pessoa.Receitas = pessoaNova.Receitas;
            } 

            if (pessoaNova.Despesas != 0)
            {
                pessoa.Despesas = pessoaNova.Despesas;
            }

            //espera salvar as mudanças feitas
            await _context.SaveChangesAsync();

            //retorna status ok
            return Ok();
        }

        //Define qual o tipo de requisição deste método junto com o path variable. Neste caso é um delete com path variable {id} -> ID da pessoa.
        [HttpDelete("{id}")]
        public async Task<ActionResult> ExcluirPessoa(int id)
        {
            //primeiro busca a pessoa no BD de forma assinrona com await -> espera a requisição ser feita
            var pessoa = await _context.Pessoas.FindAsync(id);

            //verifica se a pessoa existe
            if (pessoa == null)
            {
                return NotFound("Pessoa não encontrada. Verifique o ID e tente de novo.");
            }

            //adiciona a exclusão ao contexto do EF
            _context.Remove(pessoa);

            //salva as mudanças feitas dentro do BD
            await _context.SaveChangesAsync();

            //retorna o código 204. No content
            return NoContent();
        }
    }
}