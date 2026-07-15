using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace safeHouseBackend.Migrations
{
    /// <inheritdoc />
    public partial class AcrescimoDeColunas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Despesas",
                table: "Pessoas",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Receitas",
                table: "Pessoas",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "podeTerReceita",
                table: "Pessoas",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Despesas",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "Receitas",
                table: "Pessoas");

            migrationBuilder.DropColumn(
                name: "podeTerReceita",
                table: "Pessoas");
        }
    }
}
