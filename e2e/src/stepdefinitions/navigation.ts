import { Given } from '@cucumber/cucumber';

Given(/^I am on the "([^"]*)" page$/, async (pageId: string) => {
        console.log(`I am on the ${pageId} page`);
        await global.page.goto("http://localhost:3000");
    }
)