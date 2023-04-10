import LoginPage from '../page-objects/login-page';
import ProductPage from '../page-objects/product-page';

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
        const randomJoke = await browser.call(() => Random.getRandomJoke());

        console.log("***** " + randomJoke.data.id);
        console.log("***** " + randomJoke.data.value);
    });
});
