import { getDiff } from './getDiff';

export const getTemplate = (oldText: string, newText: string): string | undefined => {
    const textX = oldText.trim().match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [];
    const textY = newText.trim().match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [];
    let template = '';
    textX.forEach((item, index) => {
        const x = item.split(' ');
        const y = textY[index].split(' ');
        const XY: Record<string, number[]> = {};
        for (let i = 0; i < x.length + 1; i++) {
            XY[i] = [0];
            for (let n = 1; n < y.length + 1; n++) {
                if (i === 0) {
                    XY[i].push(0);
                } else if (x[i - 1] === y[n - 1]) {
                    XY[i].push(XY[i - 1][n - 1] + 1);
                } else {
                    XY[i].push(Math.max(XY[i][n - 1], XY[i - 1][n]));
                }
            }
        }
        const i = x.length;
        const n = y.length;
        const itemTemplate = '</li>';
        template = template + getDiff(XY, x, y, i, n, itemTemplate);
    });
    return template;
};
