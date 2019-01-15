export default function() {
  // Function Expression (anonymous)
  // No argument
  const functionExpressionAnonymous01a = function(): string { return "foo"; }; const functionExpressionAnonymous01b = function(): string { return "foo"; };
  const functionExpressionAnonymous02a = function(): string {
    return "foo";
  }; const functionExpressionAnonymous02b = function(): string {
    return "foo";
  };

  // Single argument
  const functionExpressionAnonymous11a = function(foo: string): string { return "foo"; }; const functionExpressionAnonymous11b = function(foo: string): string { return "foo"; };
  const functionExpressionAnonymous12a = function(foo: string): string {
    return "foo";
  }; const functionExpressionAnonymous12b = function(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionAnonymous21a = function(foo: string, bar: string): string { return "foo"; }; const functionExpressionAnonymous21b = function(foo: string, bar: string): string { return "foo"; };
  const functionExpressionAnonymous22a = function(foo: string, bar: string): string {
    return "foo";
  }; const functionExpressionAnonymous22b = function(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionAnonymous31a = function(foo: string = "=>", bar: string = "()"): string { return "foo"; }; const functionExpressionAnonymous31b = function(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  const functionExpressionAnonymous32a = function(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  }; const functionExpressionAnonymous32b = function(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };

  // Function Expression (with name)
  // No argument
  const functionExpressionNamed01a = function functionExpressionNamed01a(): string { return "foo"; }; const functionExpressionNamed01b = function functionExpressionNamed01b(): string { return "foo"; };
  const functionExpressionNamed02a = function functionExpressionNamed02a(): string {
    return "foo";
  }; const functionExpressionNamed02b = function functionExpressionNamed02b(): string {
    return "foo";
  };

  // Single argument
  const functionExpressionNamed11a = function functionExpressionNamed11a(foo: string): string { return "foo"; }; const functionExpressionNamed11b = function functionExpressionNamed11b(foo: string): string { return "foo"; };
  const functionExpressionNamed12a = function functionExpressionNamed12a(foo: string): string {
    return "foo";
  }; const functionExpressionNamed12b = function functionExpressionNamed12b(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionNamed21a = function functionExpressionNamed21a(foo: string, bar: string): string { return "foo"; }; const functionExpressionNamed21b = function functionExpressionNamed21b(foo: string, bar: string): string { return "foo"; };
  const functionExpressionNamed22a = function functionExpressionNamed22a(foo: string, bar: string): string {
    return "foo";
  }; const functionExpressionNamed22b = function functionExpressionNamed22b(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionNamed31a = function functionExpressionNamed31a(foo: string = "=>", bar: string = "()"): string { return "foo"; }; const functionExpressionNamed31b = function functionExpressionNamed31b(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  const functionExpressionNamed32a = function functionExpressionNamed32a(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  }; const functionExpressionNamed32b = function functionExpressionNamed32b(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };
};