/* eslint-env detox/detox, mocha */

describe('Example', () => {
  const text = 'a new ToDo Item';

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Adding ToDo Item should work!', async () => {
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await expect(
      element(by.text(text).withAncestor(by.id('toDoList'))),
    ).toBeVisible();
  });

  it('Completing ToDo Item should work!', async () => {
    // item add
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('completeButton')).multiTap(2);
    await expect(
      element(
        by
          .id('completed')
          .and(by.text(text))
          .withAncestor(by.id('toDoList')),
      ),
    ).toBeVisible();
  });
});
