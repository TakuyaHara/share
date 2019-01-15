export default function() {
  // No argument
  const arrowFunction01a = () => { return "foo"; }; const arrowFunction01b = () => { return "foo"; };
  const arrowFunction02a = () => {
    return "foo";
  }; const arrowFunction02b = () => {
    return "foo";
  }; 
  const arrowFunction03a = () => "foo"; const arrowFunction03b = () => "foo";
  const arrowFunction04a = () => ({ foo: "bar" }); const arrowFunction04b = () => ({ foo: "bar" });
  const arrowFunction05a = () => ({
    foo: "bar"
  }); const arrowFunction05b = () => ({
    foo: "bar"
  }); 

  // Single argument without parenthesis
  const arrowFunction11a = foo => { return "foo"; }; const arrowFunction11b = foo => { return "foo"; };
  const arrowFunction12a = foo => {
    return "foo";
  }; const arrowFunction12b = foo => {
    return "foo";
  };
  const arrowFunction13a = foo => "foo"; const arrowFunction13b = foo => "foo";
  const arrowFunction14a = foo => ({ foo: "bar" }); const arrowFunction14b = foo => ({ foo: "bar" });
  const arrowFunction15a = foo => ({
    foo: "bar"
  }); const arrowFunction15b = foo => ({
    foo: "bar"
  });

  // Single argument with parenthesis
  const arrowFunction21a = (foo) => { return "foo"; }; const arrowFunction21b = (foo) => { return "foo"; };
  const arrowFunction22a = (foo) => {
    return "foo";
  }; const arrowFunction22b = (foo) => {
    return "foo";
  };
  const arrowFunction23a = (foo) => "foo"; const arrowFunction23b = (foo) => "foo";
  const arrowFunction24a = (foo) => ({ foo: "bar" }); const arrowFunction24b = (foo) => ({ foo: "bar" });
  const arrowFunction25a = (foo) => ({
    foo: "bar"
  }); const arrowFunction25b = (foo) => ({
    foo: "bar"
  });

  // Multiple arguments
  const arrowFunction31a = (foo, bar) => { return "foo"; }; const arrowFunction31b = (foo, bar) => { return "foo"; };
  const arrowFunction32a = (foo, bar) => {
    return "foo";
  }; const arrowFunction32b = (foo, bar) => {
    return "foo";
  };
  const arrowFunction33a = (foo, bar) => "foo"; const arrowFunction33b = (foo, bar) => "foo";
  const arrowFunction34a = (foo, bar) => ({ foo: "bar" }); const arrowFunction34b = (foo, bar) => ({ foo: "bar" });
  const arrowFunction35a = (foo, bar) => ({
    foo: "bar"
  }); const arrowFunction35b = (foo, bar) => ({
    foo: "bar"
  });

  // Arguments with default values
  const arrowFunction41a = (foo = "=>", bar = "()") => { return "foo"; }; const arrowFunction41b = (foo = "=>", bar = "()") => { return "foo"; };
  const arrowFunction42a = (foo = "=>", bar = "()") => {
    return "foo";
  }; const arrowFunction42b = (foo = "=>", bar = "()") => {
    return "foo";
  };
  const arrowFunction43a = (foo = "=>", bar = "()") => "foo"; const arrowFunction43b = (foo = "=>", bar = "()") => "foo";
  const arrowFunction44a = (foo = "=>", bar = "()") => ({ foo: "bar" }); const arrowFunction44b = (foo = "=>", bar = "()") => ({ foo: "bar" });
  const arrowFunction45a = (foo = "=>", bar = "()") => ({
    foo: "bar"
  }); const arrowFunction45b = (foo = "=>", bar = "()") => ({
    foo: "bar"
  });
};