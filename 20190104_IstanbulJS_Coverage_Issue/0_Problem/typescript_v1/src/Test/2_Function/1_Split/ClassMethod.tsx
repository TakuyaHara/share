class ClassMethod {
  // No argument
  public classMethod01(

  ): string { return "foo"; };
  public classMethod02(

  ): string {
    return "foo";
  };

  // Single argument
  public classMethod11(
    foo: string
    ): string { return "foo"; };
  public classMethod12(
    foo: string
    ): string {
    return "foo";
  };

  // Multiple arguments
  public classMethod21(
    foo: string, 
    bar: string
    ): string { return "foo"; };
  public classMethod22(
    foo: string, 
    bar: string
    ): string {
    return "foo";
  };

  // Arguments with default values
  public classMethod31(
    foo: string = "=>", 
    bar: string = "()"
    ): string { return "foo"; };
  public classMethod32(
    foo: string = "=>", 
    bar: string = "()"
    ): string {
    return "foo";
  };
}
export default function() {

};