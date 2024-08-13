function sortVowels(s: string): string {
    const glas = 'aoeiuAOEIU';

    const indexes: number[] = [];
    let chars: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const chr = s[i]
        if (glas.includes(chr)) {
            indexes.push(i);
            chars.push(chr);
        }
    }
    chars = chars.sort();
    let tempS = Array.from(s);
    for (let i = 0; i < chars.length; i++) {
        const ind = indexes[i];
        const chr = chars[i];

        tempS[ind] = chr;
    }

    s = tempS.reduce((prev, curr) => prev + curr, '');
    return s;
};