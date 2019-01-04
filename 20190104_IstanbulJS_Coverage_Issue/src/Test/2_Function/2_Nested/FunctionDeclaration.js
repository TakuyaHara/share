export default function() {
  function functionDeclaration1() { return function() { return "foo"; }; };
  function functionDeclaration2() {
    return function() {
      return "foo";
    };
  };
  
  function functionDeclaration11(foo, bar) { return function(foo, bar) { return "foo"; }; };
  function functionDeclaration12(foo, bar) {
    return function(foo, bar) {
      return "foo";
    };
  };
  
  function functionDeclaration21(foo, bar) { return function(foo, bar) { return "foo"; }; };
  function functionDeclaration22(foo, bar) {
    return function(foo, bar) {
      return "foo";
    };
  };
  
  function functionDeclaration31() { return function() { return "foo"; }; };
  function functionDeclaration32() {
    return function() {
      return "foo";
    };
  };
  
  function functionDeclaration41(foo, bar) { return function(foo, bar) { return "foo"; }; };
  function functionDeclaration42(foo, bar) {
    return function(foo, bar) {
      return "foo";
    };
  };
  
  function functionDeclaration51(foo = "=>", bar = "()") { return function(foo = "=>", bar = "()") { return "foo"; }; };
  function functionDeclaration52(foo = "=>", bar = "()") {
    return function(foo = "=>", bar = "()") {
      return "foo";
    };
  };
};