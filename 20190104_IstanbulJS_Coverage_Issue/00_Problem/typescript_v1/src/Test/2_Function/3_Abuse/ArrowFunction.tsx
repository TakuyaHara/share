export default function() {
  // No argument
  const arrowFunction01a = (): string => { return "foo"; }; const arrowFunction01b = (): string => { return "foo"; };
  const arrowFunction02a = (): string => {
    return "foo";
  }; const arrowFunction02b = (): string => {
    return "foo";
  }; 
  const arrowFunction03a = (): string => "foo"; const arrowFunction03b = (): string => "foo";
  const arrowFunction04a = (): object => ({ foo: "bar" }); const arrowFunction04b = (): object => ({ foo: "bar" });
  const arrowFunction05a = (): object => ({
    foo: "bar"
  }); const arrowFunction05b = (): object => ({
    foo: "bar"
  }); 

  // Single argument
  const arrowFunction11a = (foo: string): string => { return "foo"; }; const arrowFunction11b = (foo: string): string => { return "foo"; };
  const arrowFunction12a = (foo: string): string => {
    return "foo";
  }; const arrowFunction12b = (foo: string): string => {
    return "foo";
  };
  const arrowFunction13a = (foo: string): string => "foo"; const arrowFunction13b = (foo: string): string => "foo";
  const arrowFunction14a = (foo: string): object => ({ foo: "bar" }); const arrowFunction14b = (foo: string): object => ({ foo: "bar" });
  const arrowFunction15a = (foo: string): object => ({
    foo: "bar"
  }); const arrowFunction15b = (foo: string): object => ({
    foo: "bar"
  });

  // Multiple arguments
  const arrowFunction21a = (foo: string, bar: string): string => { return "foo"; }; const arrowFunction21b = (foo: string, bar: string): string => { return "foo"; };
  const arrowFunction22a = (foo: string, bar: string): string => {
    return "foo";
  }; const arrowFunction22b = (foo: string, bar: string): string => {
    return "foo";
  };
  const arrowFunction23a = (foo: string, bar: string): string => "foo"; const arrowFunction23b = (foo: string, bar: string): string => "foo";
  const arrowFunction24a = (foo: string, bar: string): object => ({ foo: "bar" }); const arrowFunction24b = (foo: string, bar: string): object => ({ foo: "bar" });
  const arrowFunction25a = (foo: string, bar: string): object => ({
    foo: "bar"
  }); const arrowFunction25b = (foo: string, bar: string): object => ({
    foo: "bar"
  });

  // Arguments with default values
  const arrowFunction31a = (foo: string = "=>", bar: string = "()"): string => { return "foo"; }; const arrowFunction31b = (foo: string = "=>", bar: string = "()"): string => { return "foo"; };
  const arrowFunction32a = (foo: string = "=>", bar: string = "()"): string => {
    return "foo";
  }; const arrowFunction32b = (foo: string = "=>", bar: string = "()"): string => {
    return "foo";
  };
  const arrowFunction33a = (foo: string = "=>", bar: string = "()"): string => "foo"; const arrowFunction33b = (foo: string = "=>", bar: string = "()"): string => "foo";
  const arrowFunction34a = (foo: string = "=>", bar: string = "()"): object => ({ foo: "bar" }); const arrowFunction34b = (foo: string = "=>", bar: string = "()"): object => ({ foo: "bar" });
  const arrowFunction35a = (foo: string = "=>", bar: string = "()"): object => ({
    foo: "bar"
  }); const arrowFunction35b = (foo: string = "=>", bar: string = "()"): object => ({
    foo: "bar"
  });
};