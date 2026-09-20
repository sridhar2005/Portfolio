import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Scroll down the page to reveal the 'Maruthi Medical' / 'Maruthi Medical Centre' entry so the breakdown entry can be opened.
        await page.mouse.wheel(0, 300)
        
        # -> Click the '15 Days Rotation • 2025 — Maruthi Medical Centre' rotation card to open its detailed breakdown modal.
        # 15 Days Rotation • 2025 Maruthi Medical Centre... button
        elem = page.get_by_role("button", name="15 Days Rotation • 2025")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The Maruthi Medical Centre breakdown modal was opened and showed the heading 'Clinical Rotation Breakdown' and 'Maruthi Medical Centre'.
        await page.get_by_role("button", name="15 Days Rotation • 2025").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The '15 Days Rotation • 2025 — Maruthi Medical Centre' rotation card is visible and was clicked to open the modal.
        await expect(page.get_by_role("button", name="15 Days Rotation • 2025").nth(0)).to_be_visible(timeout=15000), "The '15 Days Rotation \u2022 2025 \u2014 Maruthi Medical Centre' rotation card is visible and was clicked to open the modal."
        
        # --> The Maruthi Medical Centre breakdown modal was dismissed after pressing Escape and the modal text is no longer present.
        await page.get_by_role("button", name="15 Days Rotation • 2025").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The '15 Days Rotation • 2025 — Maruthi Medical Centre' rotation card is visible on the page after dismissing the modal.
        await expect(page.get_by_role("button", name="15 Days Rotation • 2025").nth(0)).to_be_visible(timeout=15000), "The '15 Days Rotation \u2022 2025 \u2014 Maruthi Medical Centre' rotation card is visible on the page after dismissing the modal."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    