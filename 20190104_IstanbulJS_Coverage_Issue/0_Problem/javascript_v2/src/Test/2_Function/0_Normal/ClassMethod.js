class ClassMethod {
  // No argument
  classMethod01() { return "foo"; };
  classMethod02() {
    return "foo";
  };

  // Single argument
  classMethod11(foo) { return "foo"; };
  classMethod12(foo) {
    return "foo";
  };

  // Multiple arguments
  classMethod21(foo, bar) { return "foo"; };
  classMethod22(foo, bar) {
    return "foo";
  };

  // Arguments with default values
  classMethod31(foo = "=>", bar = "()") { return "foo"; };
  classMethod32(foo = "=>", bar = "()") {
    return "foo";
  };
}
export default function() {

};