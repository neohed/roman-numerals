'use strict';

var romanNumerals = (function () {
    var symbolsMap = [{ n: 1000, d: 'M' }, { n: 900, d: 'CM' }, { n: 500, d: 'D' }, { n: 400, d: 'CD' }, { n: 100, d: 'C' }, { n: 90, d: 'XC' }, { n: 50, d: 'L' }, { n: 40, d: 'XL' }, { n: 10, d: 'X' }, { n: 9, d: 'IX' }, { n: 5, d: 'V' }, { n: 4, d: 'IV' }, { n: 1, d: 'I' }],
        stringOrder = [1, 3, 5, 7, 9, 11, 0, 2, 4, 6, 8, 10, 12];

    return {
        deromanize: function (numerals) {
            var number = 0, x = 0, y = 0;

            while (x < numerals.length) {
                var symbolMap = symbolsMap[stringOrder[y]],
                    symbol = numerals.substring(x, x + symbolMap.d.length);

                if (symbolMap.d === symbol) {
                    number += symbolMap.n;
                    x += symbolMap.d.length;
                    y = 0;
                } else {
                    ++y;
                }
            }

            return number;
        },
        romanize: function (number) {
            var numerals = [], i = 0, symbol;

            while (number > 0) {
                symbol = symbolsMap[i];

                if (symbol.n <= number) {
                    numerals.push(symbol.d);
                    number -= symbol.n;
                } else {
                    ++i;
                }
            }

            return numerals.join('');
        }
    };
})();
