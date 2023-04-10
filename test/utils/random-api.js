const axios = require('axios');

class RandomAPI{
    async getRandomJoke(){
        const response = await axios.get('https://api.chucknorris.io/jokes/random');

        return response;
    }
}
export default new RandomAPI();