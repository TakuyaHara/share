class ClassMethod {
  // No argument
  public classMethod01a(): string { return "foo"; }; public classMethod01b(): string { return "foo"; };
  public classMethod02a(): string {
    return "foo";
  }; public classMethod02b(): string {
    return "foo";
  };

  // Single argument
  public classMethod11a(foo: string): string { return "foo"; }; public classMethod11b(foo: string): string { return "foo"; };
  public classMethod12a(foo: string): string {
    return "foo";
  }; public classMethod12b(foo: string): string {
    return "foo";
  };

  // Multiple arguments
  public classMethod21a(foo: string, bar: string): string { return "foo"; }; public classMethod21b(foo: string, bar: string): string { return "foo"; };
  public classMethod22a(foo: string, bar: string): string {
    return "foo";
  }; public classMethod22b(foo: string, bar: string): string {
    return "foo";
  };

  // Arguments with default values
  public classMethod31a(foo: string = "=>", bar: string = "()"): string { return "foo"; }; public classMethod31b(foo: string = "=>", bar: string = "()"): string { return "foo"; };
  public classMethod32a(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  }; public classMethod32b(foo: string = "=>", bar: string = "()"): string {
    return "foo";
  };
}
export default function() {

};