---
title: OnPostDefuserDropped
index: true
order: 2
category:
  - Guide
---

# OnPostDefuserDropped
This event is triggered after defuser_dropped is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDefuserDropped", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |