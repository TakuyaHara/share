export default function() {
  // No argument
  const arrowFunction01 = () => {
    return () => { return "foo"; };
  }
  const arrowFunction02 = () => {
    return () => {
      return "foo";
    };
  }
  const arrowFunction03 = () => {
    return () => "foo";
  }
  const arrowFunction04 = () => {
    return () => ({ foo: "bar" });
  }
  const arrowFunction05 = () => {
    return () => ({
      foo: "bar"
    });
  }

  // Single argument without parenthesis
  const arrowFunction11 = () => {
    return foo => { return "foo"; };
  }
  const arrowFunction12 = () => {
    return foo => {
      return "foo";
    };
  }
  const arrowFunction13 = () => {
    return foo => "foo";
  }
  const arrowFunction14 = () => {
    return foo => ({ foo: "bar" });
  }
  const arrowFunction15 = () => {
    return foo => ({
      foo: "bar"
    });
  }

  // Single argument with parenthesis
  const arrowFunction21 = () => {
    return (foo) => { return "foo"; };
  }
  const arrowFunction22 = () => {
    return (foo) => {
      return "foo";
    };
  }
  const arrowFunction23 = () => {
    return (foo) => "foo";
  }
  const arrowFunction24 = () => {
    return (foo) => ({ foo: "bar" });
  }
  const arrowFunction25 = () => {
    return (foo) => ({
      foo: "bar"
    });
  }

  // Multiple arguments
  const arrowFunction31 = () => {
    return (foo, bar) => { return "foo"; };
  }
  const arrowFunction32 = () => {
    return (foo, bar) => {
      return "foo";
    };
  }
  const arrowFunction33 = () => {
    return (foo, bar) => "foo";
  }
  const arrowFunction34 = () => {
    return (foo, bar) => ({ foo: "bar" });
  }
  const arrowFunction35 = () => {
    return (foo, bar) => ({
      foo: "bar"
    });
  }

  // Arguments with default values
  const arrowFunction41 = () => {
    return (foo = "=>", bar = "()") => { return "foo"; };
  }
  const arrowFunction42 = () => {
    return (foo = "=>", bar = "()") => {
      return "foo";
    };
  }
  const arrowFunction43 = () => {
    return (foo = "=>", bar = "()") => "foo";
  }
  const arrowFunction44 = () => {
    return (foo = "=>", bar = "()") => ({ foo: "bar" });
  }
  const arrowFunction45 = () => {
    return (foo = "=>", bar = "()") => ({
      foo: "bar"
    });
  }
};