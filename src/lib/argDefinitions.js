const argDefinitions = [
  {
    name: 'user',
    alias: 'u',
    multiple: false,
    description: 'The email of the Amazon account.',
    type: String,
    typeLabel: '[italic]{string}',
  },
  {
    name: 'password',
    alias: 'p',
    multiple: false,
    description: 'The password of the Amazon account.',
    type: String,
    typeLabel: '[italic]{string}',
  },
  {
    name: 'year',
    alias: 'y',
    multiple: true,
    defaultValue: new Date().getFullYear(),
    description:
      'The four digit year or list of years for which to export the invoices.\nDefaults to the current year.',
    type: Number,
    typeLabel: '[italic]{integer}',
  },
  {
    name: 'limit',
    alias: 'l',
    multiple: false,
    defaultValue: 9999,
    description:
      'Maximum number of orders to process per year.\nDefaults to 9999.\nPrimarily intended for development work.',
    type: Number,
    typeLabel: '[italic]{integer}',
  },
  {
    name: 'debugMode',
    alias: 'd',
    multiple: false,
    defaultValue: false,
    description: 'Run scraper in debug mode.',
    type: Boolean,
    typeLabel: '[italic]{boolean}',
  },
  {
    name: 'groupKey',
    alias: 'g',
    multiple: false,
    defaultValue: false,
    description: 'Group key needed for business accounts',
    type: String,
    typeLabel: '[italic]{string}',
  }
];

export default argDefinitions;
