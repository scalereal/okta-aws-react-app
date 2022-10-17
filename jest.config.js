const { configure } = require('@medly/jest-config-react');

process.env.TZ = 'UTC';

module.exports = configure({
    rootDir: './',
    collectCoverageFrom: [
        '!<rootDir>/**/Routes.tsx',
        '!<rootDir>/src/logos/**',
        '!<rootDir>/src/icons/**',
        '!<rootDir>/src/routes/**',
        '!<rootDir>/src/**/columns.ts',
        '!<rootDir>/src/utils/history.ts',
        '!<rootDir>/src/utils/localStorage.ts'
    ],
    coverageThreshold: {
        global: {
            branches: 85.74,
            functions: 95.59,
            lines: 96.83,
            statements: 96.37
        }
    },
    moduleNameMapper: {
        '^@auth': '<rootDir>/src/auth',
        '^@logos(.*)$': '<rootDir>/src/logos$1',
        '^@icons(.*)$': '<rootDir>/src/icons$1',
        '^@effects(.*)$': '<rootDir>/src/effects$1'
    }
});
