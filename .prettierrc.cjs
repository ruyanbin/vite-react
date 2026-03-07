// .prettierrc.cjs
module.exports = {
  // 基础格式
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 120,

  // JSX 格式
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,

  // 箭头函数格式
  arrowParens: 'always',

  // 对象属性引号
  quoteProps: 'as-needed',

  // 文件末尾换行 - 使用 auto 自动检测
  endOfLine: 'auto',

  // 插件配置
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  // 导入排序配置
  importOrder: ['^react(.*)$', '^@?\\w', '^#/(.*)$', '^#c/(.*)$', '^#a/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
