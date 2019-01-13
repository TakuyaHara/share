export default function() {
  const foo: string | boolean = true ? "foo" : false; const foofoo: string | boolean = true ? "foofoo" : false;
  const bar: string | boolean = false ? true : "bar"; const barbar: string | boolean = false ? true : "barbar";
};