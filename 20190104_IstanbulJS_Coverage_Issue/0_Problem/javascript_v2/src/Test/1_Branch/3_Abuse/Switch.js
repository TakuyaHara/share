export default function() {
  const obj = {
    foo: "foo"
  };

  // === single case ===
  switch(obj.foo) { case "bar": "bar"; break; } switch(obj.foo) { case "bar": "bar"; break; }

  // === single case, default ===
  switch(obj.foo) { case "foo": "foo"; break; default: "baz"; break; } switch(obj.foo) { case "foo": "foo"; break; default: "baz"; break; }

  // === multiple cases, default ===
  switch(obj.foo) { case "foo": "foo"; break; case obj['case "bar":']: "bar"; break; default: "baz"; break; } switch(obj.foo) { case "foo": "foo"; break; case obj['case "bar":']: "bar"; break; default: "baz"; break; }
};