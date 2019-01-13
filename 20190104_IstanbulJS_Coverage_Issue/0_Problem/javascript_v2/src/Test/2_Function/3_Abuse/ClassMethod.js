class ClassMethod {
  // No argument
  classMethod01a() { return "foo"; }; classMethod01b() { return "foo"; };
  classMethod02a() {
    return "foo";
  }; classMethod02b() {
    return "foo";
  };

  // Single argument
  classMethod11a(foo) { return "foo"; }; classMethod11b(foo) { return "foo"; };
  classMethod12a(foo) {
    return "foo";
  }; classMethod12b(foo) {
    return "foo";
  };

  // Multiple arguments
  classMethod21a(foo, bar) { return "foo"; }; classMethod21b(foo, bar) { return "foo"; };
  classMethod22a(foo, bar) {
    return "foo";
  }; classMethod22b(foo, bar) {
    return "foo";
  };

  // Arguments with default values
  classMethod31a(foo = "=>", bar = "()") { return "foo"; }; classMethod31b(foo = "=>", bar = "()") { return "foo"; };
  classMethod32a(foo = "=>", bar = "()") {
    return "foo";
  }; classMethod32b(foo = "=>", bar = "()") {
    return "foo";
  };
}
export default function() {

};