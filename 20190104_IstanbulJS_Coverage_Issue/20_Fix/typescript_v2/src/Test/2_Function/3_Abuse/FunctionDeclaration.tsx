export default function() {
  // No argument
  function functionDeclaration01a(): string { return "foo"; }; function functionDeclaration01b(): string { return "foo"; };
  function functionDeclaration02a(): string {
    return "foo";
  }; function functionDeclaration02b(): string {
    return "foo";
  };

  // Single argument
  function functionDeclaration11a(foo: string): string { return "foo"; }; function functionDeclaration11b(foo: string): string { return "foo"; };
  function functionDeclaration12a(foo: string): string {
    return "foo";
  }; function functionDeclaration12b(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  function functionDeclaration21a(foo: string, bar: string): string { return "foo"; }; function functionDeclaration21b(foo: string, bar: string): string { return "foo"; };
  function functionDeclaration22a(foo: string, bar: string): string {
    return "foo";
  }; function functionDeclaration22b(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  function functionDeclaration31a(foo: string = "=>", bar: string = "()"): string { return "foo"; }; function functionDeclaration31b(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  function functionDeclaration32a(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  }; function functionDeclaration32b(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };
};