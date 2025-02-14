# Identificador de Tipo de Cartão

![Identificação de Cartões](https://via.placeholder.com/800x400.png?text=Identificador+de+Cart%C3%A3o)

## 📌 Sobre o Projeto
Este projeto contém uma função que identifica o tipo de cartão de crédito com base no número informado. O código utiliza expressões regulares para identificar os tipos de cartões mais comuns, como Visa, Mastercard, Elo, American Express, Discover e Hipercard.

## ⚙️ Funcionalidade
A função principal do código é `identifyCardType`, que recebe um número de cartão como entrada e retorna o tipo de cartão correspondente. Além disso, a interface de usuário exibe o tipo de cartão em tempo real, à medida que o usuário digita.

## 🔍 Como Funciona
1. **Limpeza do número do cartão**: Remove caracteres não numéricos (espaços e hífens) utilizando `replace(/[\s-]/g, '')`.
2. **Identificação do Tipo de Cartão**:
   - **Visa**: Começa com `4`.
   - **Mastercard**: Começa com `51-55` ou `2221-2720`.
   - **Elo**: Pode começar com `4011`, `4312`, `4389`.
   - **American Express (AMEX)**: Começa com `34` ou `37`.
   - **Discover**: Começa com `6011`, `65`, ou `644-649`.
   - **Hipercard**: Geralmente começa com `6062`.
3. **Interface de Usuário**: Ao digitar o número do cartão, a bandeira é identificada e exibida abaixo do campo de entrada.

## 💻 Tecnologias Utilizadas
- **JavaScript**: Manipulação de strings e identificação do tipo de cartão.
- **HTML/CSS**: Construção da interface de usuário.

# Identificador de Cartão

## 🚀 Como Executar

Para executar o projeto, siga os passos abaixo:

```bash
git clone https://github.com/yamendes05/identificador-cartao.git
cd identificador-cartao
open index.html


##📜 Código Principal
function identifyCardType(cardNumber) {
    const cleanNumber = cardNumber.replace(/[\s-]/g, '');
    
    if (/^4/.test(cleanNumber)) return 'visa';
    if (/^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/.test(cleanNumber)) return 'mastercard';
    if (/^(4011|4312|4389)/.test(cleanNumber)) return 'elo';
    if (/^(34|37)/.test(cleanNumber)) return 'amex';
    if (/^(6011|65|644|645|646|647|648|649)/.test(cleanNumber)) return 'discover';
    if (/^6062/.test(cleanNumber)) return 'hipercard';
    
    return 'unknown';
}
