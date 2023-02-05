module.exports = grammar({
  name: 'structurizr',

  rules: {
    source_file: $ => $.workspace,

    // TODO : add workspace extend
    workspace: $ => seq(
      'workspace',
      optional(
        seq(
          $.name,
          optional($.description)
        ),
      ),
      '{',
      optional($.properties),
      optional($.adrs),
      optional($.docs),
      optional($.model),
      '}',
    ),

    name: $ => $._string,

    description: $ => $._string,

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

    model: $ => seq(
      'model',
      '{',
      repeat($.assignment),
      '}',
    ),

    assignment: $ => seq(
      $.identifier,
      '=',
      $.person,
    ),

    person: $ => seq(
      'person',
      $.name,
      $.description
    ),



    identifier: $ => /[a-zA-Z0-9]+/,


  }
});
