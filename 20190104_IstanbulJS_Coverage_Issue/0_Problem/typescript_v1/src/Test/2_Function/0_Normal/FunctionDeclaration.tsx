export default function() {
  // No argument
  function functionDeclaration01(): string { return "foo"; };
  function functionDeclaration02(): string {
    return "foo";
  };

  // Single argument
  function functionDeclaration11(foo: string): string { return "foo"; };
  function functionDeclaration12(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  function functionDeclaration21(foo: string, bar: string): string { return "foo"; };
  function functionDeclaration22(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  function functionDeclaration31(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  function functionDeclaration32(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };
};