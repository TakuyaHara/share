export default function() {
  // === if ===
  if (false) { "foo"; } if (false) { "foo"; }

  // === if, else ===
  if (false) { "foo"; } else { "bar"; } if (false) { "foo"; } else { "bar"; }

  if (true) { "foo"; } else { "bar"; } if (true) { "foo"; } else { "bar"; }

  // === if, else-if ===
  if (false) { "foo"; } else if (false) { "bar"; } if (false) { "foo"; } else if (false) { "bar"; }

  if (false) { "foo"; } else if (true) { "bar"; } if (false) { "foo"; } else if (true) { "bar"; }

  if (true) { "foo"; } else if (false) { "bar"; } if (true) { "foo"; } else if (false) { "bar"; }

  // === if, else-if, else ===
  if (false) { "foo"; } else if (false) { "bar"; } else { "baz"; } if (false) { "foo"; } else if (false) { "bar"; } else { "baz"; }

  if (false) { "foo"; } else if (true) { "bar"; } else { "baz"; } if (false) { "foo"; } else if (true) { "bar"; } else { "baz"; }

  if (true) { "foo"; } else if (false) { "bar"; } else { "baz"; } if (true) { "foo"; } else if (false) { "bar"; } else { "baz"; }
};