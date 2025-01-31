#Identificador de Tipo de Cartão
Este projeto contém uma função que identifica o tipo de cartão de crédito com base no número informado. O código utiliza expressões regulares para identificar os tipos de cartões mais comuns, como Visa, Mastercard, Elo, American Express, Discover e Hipercard.

#Funcionalidade
A função principal do código é identifyCardType, que recebe um número de cartão como entrada e retorna o tipo de cartão correspondente. Além disso, a interface de usuário exibe o tipo de cartão em tempo real, à medida que o usuário digita.

#Como Funciona
Limpeza do número do cartão: A função identifyCardType começa removendo todos os caracteres não numéricos (espaços e hífens) do número do cartão, utilizando a expressão regular replace(/[\s-]/g, '').

#Identificação do Tipo de Cartão:

Visa: Cartões que começam com o número "4" são identificados como Visa.
Mastercard: Cartões que começam com os números "5" (1-5), "2221-2720" são identificados como Mastercard.
Elo: Cartões que começam com os números "4011", "4312" ou "4389" são identificados como Elo.
American Express (AMEX): Cartões que começam com "34" ou "37" são identificados como American Express.
Discover: Cartões que começam com "6011", "65", "644-649" são identificados como Discover.
Hipercard: Cartões que começam com "6062" são identificados como Hipercard.
Interface de Usuário: A interface contém um campo de entrada onde o número do cartão é digitado. À medida que o usuário digita, o tipo de cartão é identificado e exibido abaixo do campo de entrada. Se o tipo for desconhecido, uma mensagem é exibida.

#Tecnologias Utilizadas
JavaScript: Para a manipulação de strings e identificação do tipo de cartão.
HTML/CSS: Para a construção da interface de usuário.
