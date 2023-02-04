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
      optional(
        $.properties,
      ),
      '}',
    ),

    workspace_name: $ => $._string,

    workspace_description: $ => $._string,

    _string: $ => seq(
      '"',
      /[a-zA-Z ]+/,
      '"',
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
