module.exports = {
  semi: true,
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  endOfLine: 'lf',
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['*.md', '*.json', '*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
