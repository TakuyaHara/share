export default function() {
  // Function Expression (anonymous)
  // No argument
  const functionExpressionAnonymous01 = function() {
    return function(): string { return "foo"; };
  }
  const functionExpressionAnonymous02 = function() {
    return function(): string {
      return "foo";
    };
  }

  // Single argument
  const functionExpressionAnonymous11 = function() {
    return function(foo: string): string { return "foo"; };
  }
  const functionExpressionAnonymous12 = function() {
    return function(foo: string): string {
      return "foo";
    };
  }

  // Multiple arguments
  const functionExpressionAnonymous21 = function() {
    return function(foo: string, bar: string): string { return "foo"; };
  }
  const functionExpressionAnonymous22 = function() {
    return function(foo: string, bar: string): string {
      return "foo";
    };
  }

  // Arguments with default values
  const functionExpressionAnonymous31 = function() {
    return function(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  }
  const functionExpressionAnonymous32 = function() {
    return function(foo: string = "=>", bar: string = "()"): string {
      return "foo";
    };
  }

  // Function Expression (with name)
  // No argument
  const functionExpressionNamed01 = function() {
    return function functionExpressionNamed01(): string { return "foo"; };
  }
  const functionExpressionNamed02 = function() {
    return function functionExpressionNamed02(): string {
      return "foo";
    };
  }

  // Single argument
  const functionExpressionNamed11 = function() {
    return function functionExpressionNamed11(foo: string): string { return "foo"; };
  }
  const functionExpressionNamed12 = function() {
    return function functionExpressionNamed12(foo: string): string {
      return "foo";
    };
  }

  // Multiple arguments
  const functionExpressionNamed21 = function() {
    return function functionExpressionNamed21(foo: string, bar: string): string { return "foo"; };
  }
  const functionExpressionNamed22 = function() {
    return function functionExpressionNamed22(foo: string, bar: string): string {
      return "foo";
    };
  }

  // Arguments with default values
  const functionExpressionNamed31 = function() {
    return function functionExpressionNamed31(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  }
  const functionExpressionNamed32 = function() {
    return function functionExpressionNamed32(foo: string = "=>", bar: string = "()"): string {
      return "foo";
    };
  }
};