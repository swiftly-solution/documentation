---
title: TriggerEvent
index: true
order: 2
category:
  - Guide
---

# TriggerEvent

Triggers an event and returns the event return code and return value.

```cpp
EventResult TriggerEvent(std::string extension_id, std::string event, std::vector<std::any> args, std::any& eventReturn);
```

### Types

- [EventResult](/docs-exts/types/EventResult.html)

### How to get the return value from a TriggerEvent?

To get the return value, you need to cast the return value to the according type via `std::any_cast`.

#### Example

```cpp
std::any returnVal;
TriggerEvent("base.ext", "TestEvent", {6,4,2,66,81}, returnVal);
// Let's assume that we're receiving back a number.
g_SMAPI->ConPrintf("%d\n", std::any_cast<int>(returnVal));
```

> [!warning]
> If the casting fails, it will throw an std::bad_any_cast exception which can be handled with a try-catch clause.

```