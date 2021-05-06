import { getTemplate } from './getTemplate';

describe('check getTemplate function', () => {
    it('should not be undefined', () => {
        const stringA = 'Aaa, bbb, ccc!';
        const stringB = 'Aaa, ccc! ddd.';

        const result = getTemplate(stringA, stringB);

        expect(result).not.toBeUndefined();
    });

    it('should find missing word!', () => {
        const stringA = 'Aaa, bbb, ccc!';
        const stringB = 'Aaa, ccc! ddd.';

        const result = getTemplate(stringA, stringB);

        expect(result).toContain('--bbb');
    });

    it('should check very long text!', () => {
        const wordsX: string[] = [];
        for (let i = 0; i < 100000; i++) {
            for (let j = 0; j <= 100; j++) {
                wordsX.push('aaaa' + (j === 100 ? '.' : ''));
            }
        }
        const wordsY: string[] = [];
        for (let i = 0; i < 100000; i++) {
            for (let j = 0; j <= 100; j++) {
                wordsY.push('aaaa' + (j === 100 ? '.' : '') + (j === 50 ? ' BBBBB' : ''));
            }
        }
        const veryLongStringX = wordsX.join(' ');
        const veryLongStringY = wordsY.join(' ');

        const result = getTemplate(veryLongStringX, veryLongStringY);

        expect(result).not.toBeUndefined();

        if (result === undefined) throw new Error('impossible');
        expect(result.match(/\++\++BBBB/g)).toHaveLength(100000);
        expect(result).not.toContain('--');
    });
});
