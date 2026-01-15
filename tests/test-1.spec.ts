import { test, expect } from '@playwright/test';

test.describe('Loan Application UI' , ()=>{

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Start Application' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('+254700000000');
  await page.getByRole('button', { name: 'Send OTP' }).click();
  await page.getByRole('textbox', { name: 'One-Time Password' }).click();
  await page.getByRole('textbox', { name: 'One-Time Password' }).fill('0000');


});
test( 'Invalid OPT shows error',async ({page})=>{
    await page.goto('/login');

    await page.getByLabel('Phone Number').fill('+254700111222');
    await page.getByRole('button', { name: 'Request OTP' }).click();

    await page.getByLabel('OTP').fill('9999');
    await page.getByRole('button', { name: 'Verify OTP' }).click();

    await expect(page.getByText('Invalid OTP')).toBeVisible();
  
//test( 'user can fill in personal details successfully', async ({page})

   await page.getByRole('button', { name: 'Verify' }).click();
   await page.getByRole('textbox', { name: 'Full Name *' }).click();
   await page.getByRole('textbox', { name: 'Full Name *' }).fill('jin');
   await page.getByRole('textbox', { name: 'National ID *' }).click();
   await page.getByRole('textbox', { name: 'National ID *' }).fill('4569867');
   await page.getByRole('textbox', { name: 'Email Address' }).click();
   await page.getByRole('textbox', { name: 'Email Address' }).fill('jin@gmail.com');
   await page.getByRole('textbox', { name: 'Date of Birth *' }).fill('2003-01-01');
   await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('spinbutton', { name: 'Loan Amount *' }).click();
   await page.getByRole('spinbutton', { name: 'Loan Amount *' }).fill('100000');
   await page.getByLabel('Loan Term (days) *').selectOption('30');
   await page.getByRole('textbox', { name: 'Purpose *' }).click();
   await page.getByRole('textbox', { name: 'Purpose *' }).fill('qhbqo');
   await page.getByRole('button', { name: 'Submit Application' }).click();
   await page.getByRole('button', { name: 'Logout' }).click();
  });
});