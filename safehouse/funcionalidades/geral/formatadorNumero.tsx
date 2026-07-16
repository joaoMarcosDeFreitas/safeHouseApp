//formatador de numero (quebra valores gigantes em abreviações, ex: '1.000.000.000' vira '1.0 bi')
export function FormatadorNumero() {
    //pt-BR define a formatação pra portugues brasileiro
    return Intl.NumberFormat('pt-br', {
        "compactDisplay": "short",
        "notation": "compact",
        "maximumFractionDigits": 2
    })
}