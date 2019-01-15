export default function() {
  const obj = {
    foo: "foo"
  };

  // === single case ===
  switch(obj.foo) {
    case "bar":
      switch(obj.foo) {
        case "bar": // Misses
          "bar";
          break;
      }
      break;
  }

  // === single case, default ===
  switch(obj.foo) {
    case "bar":
      switch(obj.foo) {
        case "foo":
          "foo";
          break;
        default: // Misses
          "baz";
          break;
      }
      break;
  }

  // === multiple cases, default ===
  switch(obj.foo) {
    case "bar":
      switch(obj.foo) {
        case "foo":
          "foo";
          break;
        case obj['case "bar":']: // Misses
          "bar";
          break;
        default: // Misses
          "baz";
          break;
      }
      break;
  }
};