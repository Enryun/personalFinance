// Jest + JSDOM setup for CRA.
// JSDOM doesn't implement window.scrollTo; mock it to avoid noisy errors.
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

