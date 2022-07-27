const { test, expect } = require('@playwright/test');
const Calculatorpage = "https://testsheepnz.github.io/BasicCalculator";
//const Field1 = '#number1Field';
//const Field2 = '#number2Field';
//const AnswerField = '#numberAnswerField';
//const CalculateButton = '#calculateButton';



const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


//Verify if adding works properly using whole numbers
data.forEach(version => {
  test.describe(version + ': ADD', () => {
    test('Adding 1 and 2 result in 3', async ({ page }) => {
      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Adding 1 and 2 should return 3').toHaveValue('3');
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
      await page.locator('#clearButton').click({ timeout: 70000 });
      await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();
    });
  });
});


//Verify if substracting works properly using whole numbers
data.forEach(version => {
  test.describe(version + ': Substact', () => {
    test('Subtacting 5 and 2 result in 3', async ({ page }) => {
      //var first = Math.floor(Math.random() * 10000);
      //var second = '';
      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 5 and 2 should return 3').toHaveValue('3');
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
     // await page.locator('#clearButton').click({ timeout: 70000 });
      //await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();

    });
  });
});

//Verify if multiplying works properly using whole numbers
data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 6 and 3 should return 18 ', async ({ page }) => {
      //var first = Math.floor(Math.random() * 10000);
      //var second = Math.random() * 1000 + 1;
      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', { label: 'Multiply' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 6 and 3 should return 18').toHaveValue('18');
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
      //await page.locator('#clearButton').click();
     // await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();

    });
  });
});


//Verify if division works properly using whole numbers
data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing by ZERO is undefined  ', async ({ page }) => {
      //var first = Math.floor(Math.random() * 10000);
      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', { label: 'Divide' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#errorMsgField')).toContainText('Divide by zero error!')
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
     // await page.locator('#clearButton').click({ timeout: 70000 });
      //await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();

    });
  });
});


//Verify if concatinating works properly using whole numbers
data.forEach(version => {
  test.describe(version + ': Concatinate', () => {
    test('Concatinating 5 and 9 results in 59  ', async ({ page }) => {

      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('9');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Concatinating 5 and 9 should return 59').toHaveValue('59');
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
      //await page.locator('#clearButton').click();
      //await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();

    });
  });
});


//Verify if operations works with decimals
data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 5 and 1.1 results in 4.5454  ', async ({ page }) => {

      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('1.1');
      await page.selectOption('#selectOperationDropdown', { label: 'Divide' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#numberAnswerField')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#numberAnswerField'), 'Dividing 5 and 1.1 should return 4.545454545454545').toHaveValue('4.545454545454545');
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();

    });
  });
});

//Verify if adding works with alphabet
data.forEach(version => {
  test.describe(version + ': ADD', () => {
    test('Adding a and b result in ab', async ({ page }) => {
      await page.goto(Calculatorpage);
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await expect(page.locator('#number1Field')).toBeVisible();
      await expect(page.locator('#number2Field')).toBeVisible();
      await expect(page.locator('#calculateButton'), '"Calculate" button is hidden.').not.toBeHidden();
      await page.locator('#calculateButton').click({ timeout: 50000 });
      await expect(page.locator('#integerSelect'), '"Integers only" check box should not be checked.').not.toBeChecked();
      await expect(page.locator('#errorMsgField')).toContainText('Number 1 is not a number')
      await expect(page.locator('#clearButton'), '"Clear" button is hidden.').not.toBeHidden();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'),'Answer field should be cleared').toBeEmpty();
    });
  });
});



