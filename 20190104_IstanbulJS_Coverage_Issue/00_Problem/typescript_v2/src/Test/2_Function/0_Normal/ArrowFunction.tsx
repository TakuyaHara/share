export default function() {
  // No argument
  const arrowFunction01 = (): string => { return "foo"; };
  const arrowFunction02 = (): string => {
    return "foo";
  };
  const arrowFunction03 = (): string => "foo";
  const arrowFunction04 = (): object => ({ foo: "bar" });
  const arrowFunction05 = (): object => ({
    foo: "bar"
  });

  // Single argument
  const arrowFunction11 = (foo: string): string => { return "foo"; };
  const arrowFunction12 = (foo: string): string => {
    return "foo";
  };
  const arrowFunction13 = (foo: string): string => "foo";
  const arrowFunction14 = (foo: string): object => ({ foo: "bar" });
  const arrowFunction15 = (foo: string): object => ({
    foo: "bar"
  });

  // Multiple arguments
  const arrowFunction21 = (foo: string, bar: string): string => { return "foo"; };
  const arrowFunction22 = (foo: string, bar: string): string => {
    return "foo";
  };
  const arrowFunction23 = (foo: string, bar: string): string => "foo";
  const arrowFunction24 = (foo: string, bar: string): object => ({ foo: "bar" });
  const arrowFunction25 = (foo: string, bar: string): object => ({
    foo: "bar"
  });

  // Arguments with default values
  const arrowFunction31 = (foo: string = "=>", bar: string = "()"): string => { return "foo"; };
  const arrowFunction32 = (foo: string = "=>", bar: string = "()"): string => {
    return "foo";
  };
  const arrowFunction33 = (foo: string = "=>", bar: string = "()"): string => "foo";
  const arrowFunction34 = (foo: string = "=>", bar: string = "()"): object => ({ foo: "bar" });
  const arrowFunction35 = (foo: string = "=>", bar: string = "()"): object => ({
    foo: "bar"
  });
};