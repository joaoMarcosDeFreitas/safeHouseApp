//componente: Função de formatador de numero (quebra valores gigantes em abreviações, ex: '1.000.000.000' vira '1.0 bi'), usado separadamente para reutilzação e organização
export function FormatadorNumero() {
    //pt-BR define a formatação pra portugues brasileiro
    return Intl.NumberFormat('pt-br', {
        //define que a abreviação do número vai ser curta, foca em liberar espaço (1.0 bi ao invés de 1.0 bilhão)
        "compactDisplay": "short",
        //define que a formatação vai ser curta (pega o numero grande e reduz a visibilidade dele)
        "notation": "compact",
        //define o máximo de digitos pós virgula (1,23 bi ou 1,234 bi -> se fosse 3)
        "maximumFractionDigits": 2
    })
}