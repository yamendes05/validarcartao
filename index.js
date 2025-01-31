function identifyCardType(cardNumber) {
    // Remove qualquer caractere que não seja número
    const cleanNumber = cardNumber.replace(/[\s-]/g, '');

    // Visa
    if (/^4/.test(cleanNumber)) {
        return 'visa';
    }

    // Mastercard
    if (/^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)/.test(cleanNumber)) {
        return 'mastercard';
    }

    // Elo
    if (/^(4011|4312|4389)/.test(cleanNumber)) {
        return 'elo';
    }

    // American Express
    if (/^(34|37)/.test(cleanNumber)) {
        return 'amex';
    }

    // Discover
    if (/^(6011|65|644|645|646|647|648|649)/.test(cleanNumber)) {
        return 'discover';
    }

    // Hipercard
    if (/^6062/.test(cleanNumber)) {
        return 'hipercard';
    }

    return 'unknown';
}

function getCardTypeLabel(type) {
    const labels = {
        visa: 'Visa',
        mastercard: 'Mastercard',
        elo: 'Elo',
        amex: 'American Express',
        discover: 'Discover',
        hipercard: 'Hipercard',
        unknown: 'Cartão não identificado'
    };
    return labels[type];
}

// DOM Elements
const cardNumberInput = document.getElementById('cardNumber');
const resultDiv = document.getElementById('result');
const cardTypeSpan = document.getElementById('cardType');

// Event Listeners
cardNumberInput.addEventListener('input', (e) => {
    // Remove non-digit characters
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    
    // Identifica o tipo de cartão
    const cardType = identifyCardType(value);
    
    // Update UI
    cardTypeSpan.textContent = getCardTypeLabel(cardType);
    resultDiv.className = `result ${cardType === 'unknown' ? 'unknown' : 'valid'}`;
});
