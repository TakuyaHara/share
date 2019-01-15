export default function() {
  // Function Expression (anonymous)
  // No argument
  const functionExpressionAnonymous01 = function(): string { return "foo"; };
  const functionExpressionAnonymous02 = function(): string {
    return "foo";
  };

  // Single argument
  const functionExpressionAnonymous11 = function(foo: string): string { return "foo"; };
  const functionExpressionAnonymous12 = function(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionAnonymous21 = function(foo: string, bar: string): string { return "foo"; };
  const functionExpressionAnonymous22 = function(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionAnonymous31 = function(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  const functionExpressionAnonymous32 = function(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };

  // Function Expression (with name)
  // No argument
  const functionExpressionNamed01 = function functionExpressionNamed01(): string { return "foo"; };
  const functionExpressionNamed02 = function functionExpressionNamed02(): string {
    return "foo";
  };

  // Single argument
  const functionExpressionNamed11 = function functionExpressionNamed11(foo: string): string { return "foo"; };
  const functionExpressionNamed12 = function functionExpressionNamed12(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionNamed21 = function functionExpressionNamed21(foo: string, bar: string): string { return "foo"; };
  const functionExpressionNamed22 = function functionExpressionNamed22(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionNamed31 = function functionExpressionNamed31(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  const functionExpressionNamed32 = function functionExpressionNamed32(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };
};