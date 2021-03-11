module.exports = function check(str, bracketsConfig) {
    let sub = [];
    for (let j = 0; j < bracketsConfig.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            sub[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
        }

        for (let k = 0; k < sub.length; k++) {
            if (str.includes(sub[k])) {
                str = str.replace(sub[k], "");
                k = -1;
            }
        }
    }
    if (str === "") {
        return true;
    }
    return false;
};
