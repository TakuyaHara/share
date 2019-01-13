export default function() {
  // No argument
  function functionDeclaration01() {
    return function() { return "foo"; };
  };
  function functionDeclaration02() {
    return function() {
      return "foo";
    };
  };

  // Single argument
  function functionDeclaration11() {
    return function(foo) { return "foo"; };
  };
  function functionDeclaration12() {
    return function(foo) {
      return "foo";
    };
  };

  // Multiple arguments
  function functionDeclaration21() {
    return function(foo, bar) { return "foo"; };
  };
  function functionDeclaration22() {
    return function(foo, bar) {
      return "foo";
    };
  };

  // Arguments with default values
  function functionDeclaration31() {
    return function(foo = "=>", bar = "()") { return "foo"; };
  };
  function functionDeclaration32() {
    return function(foo = "=>", bar = "()") {
      return "foo";
    };
  };
};