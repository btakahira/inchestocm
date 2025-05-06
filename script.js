document.getElementById('convertBtn').onclick = function() {
    const input = document.getElementById('input').value;
    const regex = /(\d+(\.\d+)?)\s*x\s*(\d+(\.\d+)?)?\s*x?\s*(\d+(\.\d+)?)?\s*inches?/i;
    const matches = input.match(regex);
    let result = '';

    if (matches) {
        // Extract dimensions and convert to cm (1 inch = 2.54 cm)
        const dimensions = [
            matches[1] ? parseFloat(matches[1]) * 2.54 : null,
            matches[3] ? parseFloat(matches[3]) * 2.54 : null,
            matches[5] ? parseFloat(matches[5]) * 2.54 : null
        ].filter(d => d !== null);

        // Form the result string
        result = dimensions.join(' x ');
    } else {
        result = 'Invalid input';
    }

    document.getElementById('result').value = result + ' cm';
};
