import { test, expect } from '@playwright/test';

test.describe('Loan Application UI', () => {

  test('User can request OTP', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Phone Number').fill('+254700111222');
    await page.getByRole('button', { name: 'Request OTP' }).click();

    await expect(page.getByText('OTP sent')).toBeVisible();
  });

  test('Invalid OTP shows error', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Phone Number').fill('+254700111222');// this should accept global
    await page.getByRole('button', { name: 'Request OTP' }).click();

    await page.getByLabel('OTP').fill('9999');
    await page.getByRole('button', { name: 'Verify OTP' }).click();

    await expect(page.getByText('Invalid OTP')).toBeVisible();
  });

  test('Underage applicant blocked in UI', async ({ page }) => {
    await page.goto('/application');

    await page.fill('#full_name', 'Underage User');
    await page.fill('#national_id', '12345678');
    await page.fill('#date_of_birth', '2015-01-01');
    await page.fill('#loan_amount', '5000');
    await page.fill('#loan_term', '30');

    await page.getByRole('button', { name: 'Submit Application' }).click();

    await expect(page.getByText('Applicant must be 18 years or older')).toBeVisible();
  });
});
