---
title: OnDefuserDropped
index: true
order: 2
category:
  - Guide
---

# OnDefuserDropped
This event is triggered when defuser_dropped is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnDefuserDropped", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |