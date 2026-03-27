import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the page title in document head", async ({ page }) => {
    await expect(page).toHaveTitle(/Toni/);
  });

  test("shows the hero headline", async ({ page }) => {
    await expect(
      page.getByText(/Most AI projects fail/i)
    ).toBeVisible();
  });

  test("shows the hero CTA link", async ({ page }) => {
    const cta = page.getByRole("link", { name: /See how I work/i });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/#process");
  });

  test("shows the header navigation", async ({ page }) => {
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("link", { name: /Toni/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Let's talk/i })).toBeVisible();
  });

  test("shows the footer", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("link", { name: /daviayllantoni@gmail.com/i })).toBeVisible();
  });

  test("process section is present", async ({ page }) => {
    const processSection = page.locator("#process");
    await expect(processSection).toBeAttached();
  });

  test("has valid OG meta tags", async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);
    const ogDesc = page.locator('meta[property="og:description"]');
    await expect(ogDesc).toHaveAttribute("content", /.+/);
  });
});

test.describe("Navigation", () => {
  test("header logo links to homepage", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByRole("link", { name: /^Toni$/i });
    await expect(logo).toHaveAttribute("href", "/");
  });
});

test.describe("404 page", () => {
  test("shows not-found page for unknown route", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
  });
});
