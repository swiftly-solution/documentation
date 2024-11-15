---
title: OnBeginNewMatch
index: true
order: 2
category:
  - Guide
---

# OnBeginNewMatch
This event is triggered when begin_new_match is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBeginNewMatch", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |