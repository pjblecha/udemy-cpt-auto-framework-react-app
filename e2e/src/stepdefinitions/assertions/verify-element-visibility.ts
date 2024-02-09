import { Then } from '@cucumber/cucumber';
import { expect } from "playwright/test";

Then(/^the "([^"]*)" should contain the text "(.*)"$/, async (elementKey: string, elementValue: string) => {
        console.log(`the ${elementKey} should contain the text ${elementValue}`);
        const content = await global.page.textContent('[data-id="contacts"]');
        expect (content).toBe(elementValue);
    }
);

Then(/^the "([^"]*)" should be displayed$/, async (elementKey: string) => {
    console.log(`the ${elementKey} should be displayed`);
    const locator = global.page.locator("[data-id='header-logo']");
    await expect(locator).toBeVisible();
});