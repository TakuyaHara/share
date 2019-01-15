export default function() {
  // No argument
  function functionDeclaration01() {
    return function(): string { return "foo"; };
  };
  function functionDeclaration02() {
    return function(): string {
      return "foo";
    };
  };

  // Single argument
  function functionDeclaration11() {
    return function(foo: string): string { return "foo"; };
  };
  function functionDeclaration12() {
    return function(foo: string): string {
      return "foo";
    };
  };

  // Multiple arguments
  function functionDeclaration21() {
    return function(foo: string, bar: string): string { return "foo"; };
  };
  function functionDeclaration22() {
    return function(foo: string, bar: string): string {
      return "foo";
    };
  };

  // Arguments with default values
  function functionDeclaration31() {
    return function(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  };
  function functionDeclaration32() {
    return function(foo: string = "=>", bar: string = "()"): string {
      return "foo";
    };
  };
};