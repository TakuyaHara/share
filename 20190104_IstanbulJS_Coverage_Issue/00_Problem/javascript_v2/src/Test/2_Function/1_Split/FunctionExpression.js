export default function() {
  // Function Expression (anonymous)
  // No argument
  const functionExpressionAnonymous01 = function(

  ) { return "foo"; };
  const functionExpressionAnonymous02 = function(

  ) {
    return "foo";
  };

  // Single argument
  const functionExpressionAnonymous11 = function(
    foo
    ) { return "foo"; };
  const functionExpressionAnonymous12 = function(
    foo
    ) {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionAnonymous21 = function(
    foo, 
    bar
    ) { return "foo"; };
  const functionExpressionAnonymous22 = function(
    foo, 
    bar
    ) {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionAnonymous31 = function(
    foo = "=>", 
    bar = "()"
    ) { return "foo"; };
  const functionExpressionAnonymous32 = function(
    foo = "=>", 
    bar = "()"
    ) {
    return "foo";
  };

  // Function Expression (with name)
  // No argument
  const functionExpressionNamed01 = function functionExpressionNamed01(

  ) { return "foo"; };
  const functionExpressionNamed02 = function functionExpressionNamed02(

  ) {
    return "foo";
  };

  // Single argument
  const functionExpressionNamed11 = function functionExpressionNamed11(
    foo
    ) { return "foo"; };
  const functionExpressionNamed12 = function functionExpressionNamed12(
    foo
    ) {
    return "foo";
  };

  // Multiple arguments
  const functionExpressionNamed21 = function functionExpressionNamed21(
    foo, 
    bar
    ) { return "foo"; };
  const functionExpressionNamed22 = function functionExpressionNamed22(
    foo, 
    bar
    ) {
    return "foo";
  };

  // Arguments with default values
  const functionExpressionNamed31 = function functionExpressionNamed31(
    foo = "=>", 
    bar = "()"
    ) { return "foo"; };
  const functionExpressionNamed32 = function functionExpressionNamed32(
    foo = "=>", 
    bar = "()"
    ) {
    return "foo";
  };
};