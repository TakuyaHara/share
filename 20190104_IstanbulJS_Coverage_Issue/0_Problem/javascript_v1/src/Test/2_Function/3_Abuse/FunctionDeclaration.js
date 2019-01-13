export default function() {
  // No argument
  function functionDeclaration01a() { return "foo"; }; function functionDeclaration01b() { return "foo"; };
  function functionDeclaration02a() {
    return "foo";
  }; function functionDeclaration02b() {
    return "foo";
  };

  // Single argument
  function functionDeclaration11a(foo) { return "foo"; }; function functionDeclaration11b(foo) { return "foo"; };
  function functionDeclaration12a(foo) {
    return "foo";
  }; function functionDeclaration12b(foo) {
    return "foo";
  };

  // Multiple arguments
  function functionDeclaration21a(foo, bar) { return "foo"; }; function functionDeclaration21b(foo, bar) { return "foo"; };
  function functionDeclaration22a(foo, bar) {
    return "foo";
  }; function functionDeclaration22b(foo, bar) {
    return "foo";
  };

  // Arguments with default values
  function functionDeclaration31a(foo = "=>", bar = "()") { return "foo"; }; function functionDeclaration31b(foo = "=>", bar = "()") { return "foo"; };
  function functionDeclaration32a(foo = "=>", bar = "()") {
    return "foo";
  }; function functionDeclaration32b(foo = "=>", bar = "()") {
    return "foo";
  };
};