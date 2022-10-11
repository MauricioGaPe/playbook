class FizzBuzzService {
    static applyValidationInExplorer(explorers, mission){
        explorers.forEach(explorer => {
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ"
            } else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
            } else if(explorer.score%5 === 0){
                explorer.trick = "BUZZ"
            } else {
                explorer.trick = explorer.score;
            }
        });
        return explorers.filter((explorer) => explorer.mission == mission);
    }
}

module.exports = FizzBuzzService;
