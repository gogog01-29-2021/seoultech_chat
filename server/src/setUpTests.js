// server/src/setupTests.js
// Jest setup file for testing environment

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.JWT_REFRESH_SECRET = 'test-refresh-secret';
// Use dynamic port like your app.js
process.env.PORT = process.env.PORT || 3000;

// Node.js 환경에서 TextEncoder/TextDecoder 설정
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// 콘솔 로그 숨기기 (선택사항)
if (process.env.HIDE_CONSOLE_LOGS === 'true') {
  global.console = {
    ...console,
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  };
}

// Setup test database or mock data if needed
beforeAll(() => {
  // Initialize test setup
});

afterAll(() => {
  // Cleanup after tests
});

// Add any global test utilities here
global.testUtils = {
  // Add common test helper functions
};