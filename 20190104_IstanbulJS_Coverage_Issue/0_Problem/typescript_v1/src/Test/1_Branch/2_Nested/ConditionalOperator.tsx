export default function() {
  const foo: string | boolean = true ? (true ? "foo" : false) : false;
  const bar: string | boolean = false ? true : (false ? true : "bar");
};