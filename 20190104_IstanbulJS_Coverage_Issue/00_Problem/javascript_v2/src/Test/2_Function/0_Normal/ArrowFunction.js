export default function() {
  // No argument
  const arrowFunction01 = () => { return "foo"; };
  const arrowFunction02 = () => {
    return "foo";
  };
  const arrowFunction03 = () => "foo";
  const arrowFunction04 = () => ({ foo: "bar" });
  const arrowFunction05 = () => ({
    foo: "bar"
  });

  // Single argument without parenthesis
  const arrowFunction11 = foo => { return "foo"; };
  const arrowFunction12 = foo => {
    return "foo";
  };
  const arrowFunction13 = foo => "foo";
  const arrowFunction14 = foo => ({ foo: "bar" });
  const arrowFunction15 = foo => ({
    foo: "bar"
  });

  // Single argument with parenthesis
  const arrowFunction21 = (foo) => { return "foo"; };
  const arrowFunction22 = (foo) => {
    return "foo";
  };
  const arrowFunction23 = (foo) => "foo";
  const arrowFunction24 = (foo) => ({ foo: "bar" });
  const arrowFunction25 = (foo) => ({
    foo: "bar"
  });

  // Multiple arguments
  const arrowFunction31 = (foo, bar) => { return "foo"; };
  const arrowFunction32 = (foo, bar) => {
    return "foo";
  };
  const arrowFunction33 = (foo, bar) => "foo";
  const arrowFunction34 = (foo, bar) => ({ foo: "bar" });
  const arrowFunction35 = (foo, bar) => ({
    foo: "bar"
  });

  // Arguments with default values
  const arrowFunction41 = (foo = "=>", bar = "()") => { return "foo"; };
  const arrowFunction42 = (foo = "=>", bar = "()") => {
    return "foo";
  };
  const arrowFunction43 = (foo = "=>", bar = "()") => "foo";
  const arrowFunction44 = (foo = "=>", bar = "()") => ({ foo: "bar" });
  const arrowFunction45 = (foo = "=>", bar = "()") => ({
    foo: "bar"
  });
};