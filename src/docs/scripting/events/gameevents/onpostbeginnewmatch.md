---
title: OnPostBeginNewMatch
index: true
order: 2
category:
  - Guide
---

# OnPostBeginNewMatch
This event is triggered after begin_new_match is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBeginNewMatch", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |