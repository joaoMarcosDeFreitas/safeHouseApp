using Microsoft.EntityFrameworkCore;
using safeHouseBackend.Data;

var builder = WebApplication.CreateBuilder(args);

//adicionando a possibilidade de solicitação a API pelo loccalhost (evitar problema de CORS)
builder.Services.AddCors(options =>
{
    //cria politica de cors
    options.AddPolicy("front", policy =>
    {
        //define a politica, possibilitando enviar JSON, tokens etc E permite solicitar qualquer método.
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//Configuração para o banco de dados. Indica o uso do SQLite e salvo localmente no arquivo chamado safehouse.db
builder.Services.AddDbContext<AplicativoDbContext>(options => options.UseSqlite("Data Source=safehouse.db"));
//registra os controllers
builder.Services.AddControllers();

var app = builder.Build();

//Ativando o CORS usado acima.
app.UseCors("front");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//linha abaixo deve ser comentada para evitar forçar uso de HTTPS e poder usar HTTP
//app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

//adiciona o mapeador do controller
app.MapControllers();

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
