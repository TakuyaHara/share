export default function() {
  // No argument
  const arrowFunction01 = () => {
    return (): string => { return "foo"; };
  }
  const arrowFunction02 = () => {
    return (): string => {
      return "foo";
    };
  }
  const arrowFunction03 = () => {
    return (): string => "foo";
  }
  const arrowFunction04 = () => {
    return (): object => ({ foo: "bar" });
  }
  const arrowFunction05 = () => {
    return (): object => ({
      foo: "bar"
    });
  }

  // Single argument
  const arrowFunction11 = () => {
    return (foo: string): string => { return "foo"; };
  }
  const arrowFunction12 = () => {
    return (foo: string): string => {
      return "foo";
    };
  }
  const arrowFunction13 = () => {
    return (foo: string): string => "foo";
  }
  const arrowFunction14 = () => {
    return (foo: string): object => ({ foo: "bar" });
  }
  const arrowFunction15 = () => {
    return (foo: string): object => ({
      foo: "bar"
    });
  }

  // Multiple arguments
  const arrowFunction21 = () => {
    return (foo: string, bar: string): string => { return "foo"; };
  }
  const arrowFunction22 = () => {
    return (foo: string, bar: string): string => {
      return "foo";
    };
  }
  const arrowFunction23 = () => {
    return (foo: string, bar: string): string => "foo";
  }
  const arrowFunction24 = () => {
    return (foo: string, bar: string): object => ({ foo: "bar" });
  }
  const arrowFunction25 = () => {
    return (foo: string, bar: string): object => ({
      foo: "bar"
    });
  }

  // Arguments with default values
  const arrowFunction31 = () => {
    return (foo: string = "=>", bar: string = "()"): string => { return "foo"; };
  }
  const arrowFunction32 = () => {
    return (foo: string = "=>", bar: string = "()"): string => {
      return "foo";
    };
  }
  const arrowFunction33 = () => {
    return (foo: string = "=>", bar: string = "()"): string => "foo";
  }
  const arrowFunction34 = () => {
    return (foo: string = "=>", bar: string = "()"): object => ({ foo: "bar" });
  }
  const arrowFunction35 = () => {
    return (foo: string = "=>", bar: string = "()"): object => ({
      foo: "bar"
    });
  }
};