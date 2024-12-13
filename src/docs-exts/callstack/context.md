---
title: Context
index: true
order: 2
category:
  - Guide
---

# Context

It registeres a call stack record inside the crash dump if the server crashes while it executes the code from the specified context.

```cpp
{
    REGISTER_CALLSTACK("plugin_name", "description");
    // ... (your code)
}
```

The call stack will automatically be removed from the crash dump once the specific context is not available anymore.
To be more exact, once the destructor for the call stack object is being called.