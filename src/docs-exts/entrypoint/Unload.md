---
title: Unload
index: true
order: 2
category:
  - Guide
---

# Unload

Unload function is being called when the extension is being unloaded.

```cpp
bool EXTENSION::Unload(std::string& error);
```

## How to make the extension give an error on unload?

To make the extension give an error, you need to return `false` and also set the error message inside error variable, otherwise return `true`.

```cpp
bool EXTENSION::Unload(std::string& error)
{
    error = "Error Message";
    return false;
}
```