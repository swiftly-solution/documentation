---
title: Load
index: true
order: 2
category:
  - Guide
---

# Load

Load function is being called when the extension is being loaded.

```cpp
bool EXTENSION::Load(std::string& error, SourceHook::ISourceHook* SHPtr, ISmmAPI* ismm, bool late);
```

Inside it, it's required to use `SAVE_GLOBALVARS();` to save the global variables used inside the extension.

## How to make the extension give an error on load?

To make the extension give an error, you need to return `false` and also set the error message inside error variable, otherwise return `true`.

```cpp
bool EXTENSION::Load(std::string& error, SourceHook::ISourceHook* SHPtr, ISmmAPI* ismm, bool late)
{
    error = "Error Message";
    return false;
}
```