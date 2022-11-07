/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[.]{2}[/]',
    '',
    '^[.][/]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],
};
