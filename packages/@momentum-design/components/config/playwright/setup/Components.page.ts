/* eslint-disable no-redeclare */
import { Page, expect, Locator, TestInfo } from '@playwright/test';

import Accessibility from './utils/accessibility';

const componentsDevPageTitle = 'Momentum Components Dev Page';
const htmlRootElementSelector = '#root';

interface MountOptions {
  html: string;
}

interface ComponentsPage {
  accessibility: Accessibility;
  page: Page;
  testInfo: TestInfo
}

/**
 * Components Page Object Model
 *
 * This object model includes basic functionalities like setup, teardown, mount, etc.
 * used for Momentum components E2E testing
 */
class ComponentsPage {
  constructor(page: Page,testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;

    // creates utility objects on components page and inject dependencies:
    this.accessibility = new Accessibility(this.page, this.testInfo);
  }

  /**
   * **Setup function**
   *
   * to run before the test to navigate correctly
   */
  async setup() {
    await this.navigate();
  }

  /**
   * **TearDown function**
   *
   * to run after the test
   */
  async tearDown() {
    await this.page.close();
  }

  /**
   * **Navigate function**
   *
   * Path urls are allowed
   *
   * If no url provided, it navigates to baseURL
   *
   * - Go to the provided url
   * - Await till page has been loaded
   */
  async navigate(url?: string) {
    await this.page.goto(url || '');
    await expect(this.page).toHaveTitle(componentsDevPageTitle);
  }

  /**
   * Mount a html string to the index.html which gets displayed
   *
   * @param options - a object with options, including the `html` string to mount
   */
  async mount({ html }: MountOptions) {
    await this.page.evaluate(
      (args) => {
        function htmlToElement(htmlString: string): Element {
          const template = document.createElement('template');
          template.innerHTML = htmlString.trim();
          return template.content.firstChild as Element;
        }
        const rootElement = window.document.querySelector(args.htmlRootElementSelector);
        if (rootElement) {
          rootElement.appendChild(htmlToElement(args.html));
        }
      },
      { html, htmlRootElementSelector },
    );
  }

  /**
   * Fire the `methodName` with `methodArgs` on a HTMLElement, queried by the passed in `locator`
   *
   * @param locator - Playwright locator
   * @param methodName - methodName to fire on queried HTMLElement
   * @param methodArgs - args to pass into method
   * @returns return value of method once fired
   */
  async fireCustomMethod(locator: Locator, methodName: string, methodArgs?: Array<any>) {
    const returnValue = await locator.evaluate(
      (element: HTMLElement, args) => element[args.methodName](args.methodArgs),
      { methodName, methodArgs },
    );
    return returnValue;
  }

  /**
   * Wait for the event `eventName` to be fired on a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param eventName - eventName to wait for to be fired on queried HTMLElement
   * @returns Promise, which resolves when event `eventName` gets fired
   */
  async waitForEvent(locator: Locator, eventName: string) {
    return locator.evaluate(
      (element: HTMLElement, args) => new Promise((resolve: (value?: unknown) => void) => {
        element.addEventListener(args.eventName, () => {
          resolve();
        });
      }),
      { eventName },
    );
  }

  /**
   * Set a attribute on a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param qualifiedName - qualifiedName of the attribute to be set
   * @param value - value of the attribute to be set
   */
  async setAttribute(locator: Locator, qualifiedName: string, value: any) {
    await locator.evaluate(
      (element: HTMLElement, args) => {
        element.setAttribute(args.qualifiedName, args.value);
      },
      { qualifiedName, value },
    );
  }

  /**
   * Remove a attribute of a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param qualifiedName - qualifiedName of the attribute to be removed
   */
  async removeAttribute(locator: Locator, qualifiedName: string) {
    await locator.evaluate(
      (element: HTMLElement, args) => {
        element.removeAttribute(args.qualifiedName);
      },
      { qualifiedName },
    );
  }
}
export default ComponentsPage;
