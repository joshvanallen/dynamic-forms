const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/dynamic-forms',
    '<rootDir>/libs/form-field/renderer',
    '<rootDir>/libs/form-field/text',
    '<rootDir>/libs/form-field/shared',
    '<rootDir>/libs/builder',
    '<rootDir>/libs/form-field/select',
    '<rootDir>/libs/form-field/address',
  ],
};
