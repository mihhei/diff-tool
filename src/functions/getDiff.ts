export const getDiff = (
    XY: Record<string, number[]>,
    x: string[],
    y: string[],
    i: number,
    n: number,
    itemTemplate: string,
): string | undefined => {
    if (n >= 1 && i >= 1 && x[i - 1] === y[n - 1]) {
        itemTemplate = ' ' + x[i - 1] + itemTemplate;
        return getDiff(XY, x, y, i - 1, n - 1, itemTemplate);
    } else if (n > 0 && (i === 0 || XY[i][n - 1] >= XY[i - 1][n])) {
        itemTemplate = ' <span id="green">++' + y[n - 1] + '</span>' + itemTemplate;
        return getDiff(XY, x, y, i, n - 1, itemTemplate);
    } else if (i > 0 && (n === 0 || XY[i][n - 1] < XY[i - 1][n])) {
        itemTemplate = ' <span id="red">--' + x[i - 1] + '</span>' + itemTemplate;
        return getDiff(XY, x, y, i - 1, n, itemTemplate);
    } else {
        return '<li>' + itemTemplate;
    }
};
