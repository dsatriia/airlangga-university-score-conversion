function convertScore(value){
    if (parseFloat(value) >= 0 && parseFloat(value) < 40) {
        return 'E'
    } else if (parseFloat(value) >= 40 && parseFloat(value) < 55) {
        return 'D'
    } else if (parseFloat(value) >= 55 && parseFloat(value) < 60) {
        return 'C'
    } else if (parseFloat(value) >= 60 && parseFloat(value) < 65) {
        return 'BC'
    } else if (parseFloat(value) >= 65 && parseFloat(value) < 70) {
        return 'B'
    } else if (parseFloat(value) >= 70 && parseFloat(value) < 75) {
        return 'AB'
    } else if (parseFloat(value) >= 75 && parseFloat(value) <= 100) {
        return 'A'
    } else {
        return '-'
    }
}

module.exports = convertScore;