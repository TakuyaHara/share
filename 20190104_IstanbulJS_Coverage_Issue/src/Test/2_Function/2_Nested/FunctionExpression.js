export default function() {
  // Function Expression (anonymous)
  const functionExpressionAnonymous1 = function() {
    return function() { return "foo"; };
  };
  const functionExpressionAnonymous2 = function() {
    return function() {
      return "foo";
    };
  };

  const functionExpressionAnonymous11 = function() {
    return function(foo, bar) { return "foo"; };
  };
  const functionExpressionAnonymous12 = function() {
    return function(foo, bar) {
      return "foo";
    };
  };

  const functionExpressionAnonymous21 = function() {
    return function(foo, bar) { return "foo"; };
  };
  const functionExpressionAnonymous22 = function() {
    return function(foo, bar) {
      return "foo";
    };
  };
  
  const functionExpressionAnonymous31 = function() {
    return function() { return "foo"; };
  };
  const functionExpressionAnonymous32 = function() {
    return function() {
      return "foo";
    };
  };
  
  const functionExpressionAnonymous41 = function() {
    return function(foo, bar) { return "foo"; };
  };
  const functionExpressionAnonymous42 = function() {
    return function(foo, bar) {
      return "foo";
    };
  };

  const functionExpressfunctionExpressionAnonymous51ionAnonymous11 = function() {
    return function(foo = "=>", bar = "()") { return "foo"; };
  };
  const functionExpressionAnonymous52 = function() {
    return function(foo = "=>", bar = "()") {
      return "foo";
    };
  };

  // Function Expression (with name)
  const functionExpressionNamed1 = function() {
    return function functionExpressionNamed1() { return "foo"; };
  };
  const functionExpressionNamed2 = function() {
    return function functionExpressionNamed2() {
      return "foo";
    };
  };

  const functionExpressionNamed11 = function() {
    return function functionExpressionNamed11(foo, bar) { return "foo"; };
  };
  const functionExpressionNamed12 = function() {
    return function functionExpressionNamed12(foo, bar) {
      return "foo";
    };
  };

  const functionExpressionNamed21 = function() {
    return function functionExpressionNamed21(foo, bar) { return "foo"; };
  };
  const functionExpressionNamed22 = function() {
    return function functionExpressionNamed22(foo, bar) {
      return "foo";
    };
  };
  
  const functionExpressionNamed31 = function() {
    return function functionExpressionNamed31() { return "foo"; };
  };
  const functionExpressionNamed32 = function() {
    return function functionExpressionNamed32() {
      return "foo";
    };
  };
  
  const functionExpressionNamed41 = function() {
    return function functionExpressionNamed41(foo, bar) { return "foo"; };
  };
  const functionExpressionNamed42 = function() {
    return function functionExpressionNamed42(foo, bar) {
      return "foo";
    };
  };

  const functionExpressionNamed51 = function() {
    return function functionExpressionNamed51(foo = "=>", bar = "()") { return "foo"; };
  };
  const functionExpressionNamed52 = function() {
    return function functionExpressionNamed52(foo = "=>", bar = "()") {
      return "foo";
    };
  };
};