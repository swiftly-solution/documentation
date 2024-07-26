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
@event returns void
AddEventHandler("OnDefuserDropped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |