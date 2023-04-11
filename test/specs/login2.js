import LoginPage from '../page-objects/login-page';
import Random from '../utils/api-calls';
import AllureReporter from '@wdio/allure-reporter';

before(async () => {
});

beforeEach(async () => {
    await LoginPage.open();
});

after(async () => {
    await browser.refresh();
});

afterEach(async () => {
});

describe('API Feature', () => {
    it('API Call', async () => {
        AllureReporter.addStory("Successfully API Call");
        const randomJoke = await browser.call(() => Random.getRandomJoke());
        const newPet = await browser.call(() => Random.postNewPet());

        console.log("***** Id Joke " + randomJoke.data.id);
        console.log("***** Value Joke" + randomJoke.data.value);
        console.log("***** Id Pet " + newPet.data.id);
        console.log("***** Name Pet " + newPet.data.name);
    });
});
