module.exports = grammar({
  name: 'structurizr',

  rules: {
    source_file: $ => $.workspace,

    workspace: $ => seq(
      'workspace',
      optional(
        seq(
          $.workspace_name,
          optional($.workspace_description)
        ),
      ),
      '{',
      '}',
    ),

    workspace_name: $ => $._string,

    workspace_description: $ => $._string,

    _string: $ => seq(
      '"',
      /[a-zA-Z ]+/,
      '"',
    ),
  }
});
