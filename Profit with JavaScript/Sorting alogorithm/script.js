function bestRatingMovies(numbers) {
    for (let j = 0; j < numbers.length - 1; j++) {

        //Find Max
        let max_num = numbers[j];
        let max_location = j;
        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                max_num = numbers[i];
                max_location = i;
            }
        }
        numbers[max_location] = numbers[j];
        numbers[j] = max_num
    }
    return numbers
}
console.log(bestRatingMovies([3, 6, 9, 10, 2, 11, 0, 2, 1, 4,]))