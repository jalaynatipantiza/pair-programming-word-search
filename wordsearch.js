const wordSearch = (letters, word) => {
    let verticalJoin = ['','','','','','','',''];
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }

    for (let i = 0; i < horizontalJoin.length; i++) {
        for (j = 0; j < horizontalJoin[i].length; j++) {
            verticalJoin[j] += horizontalJoin[i][j];
        }
    }
    // console.log(verticalJoin);
    // console.log(verticalJoin.map(ls => ls.join('')));



    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch