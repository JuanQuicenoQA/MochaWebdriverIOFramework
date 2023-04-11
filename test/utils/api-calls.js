const axios = require('axios');
import postNewPet from '../data/postNewPet.json';

class RandomAPI{
    async getRandomJoke(){
        const response = await axios.get('https://api.chucknorris.io/jokes/random');

        return response;
    }

    async postNewPet(){
        const response = await axios.post('https://petstore.swagger.io/v2/pet', postNewPet, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
        return response;
    }
}
export default new RandomAPI();