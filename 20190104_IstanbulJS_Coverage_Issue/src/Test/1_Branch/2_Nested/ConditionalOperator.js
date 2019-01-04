export default function() {
  const foo = true ? (true ? "foo" : false) : false;
  const bar = false ? true : (false ? true : "bar");
};