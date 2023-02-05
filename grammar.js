module.exports = grammar({
  name: 'structurizr',

  rules: {
    source_file: $ => $.workspace,

    // TODO : add workspace extend
    workspace: $ => seq(
      'workspace',
      optional(
        seq(
          $.workspace_name,
          optional($.workspace_description)
        ),
      ),
      '{',
      optional($.adrs),
      optional($.docs),
      optional($.properties),
      '}',
    ),

    workspace_name: $ => $._string,

    workspace_description: $ => $._string,

    _string: $ => seq(
      '"',
      /[a-zA-Z /]+/,
      '"',
    ),

    adrs: $ => seq(
      '!adrs',
      $._string,
    ),

    docs: $ => seq(
      '!docs',
      $._string,
    ),

    properties: $ => seq(
      'properties',
      '{',
      repeat(
        seq(
          $.name,
          $.value,
        ),
      ),
      '}',
    ),

    name: $ => $._string,
    value: $ => $._string,

  }
});
