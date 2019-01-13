export default function() {
  // No argument
  function functionDeclaration01() { return "foo"; };
  function functionDeclaration02() {
    return "foo";
  };

  // Single argument
  function functionDeclaration11(foo) { return "foo"; };
  function functionDeclaration12(foo) {
    return "foo";
  };

  // Multiple arguments
  function functionDeclaration21(foo, bar) { return "foo"; };
  function functionDeclaration22(foo, bar) {
    return "foo";
  };

  // Arguments with default values
  function functionDeclaration31(foo = "=>", bar = "()") { return "foo"; };
  function functionDeclaration32(foo = "=>", bar = "()") {
    return "foo";
  };
};