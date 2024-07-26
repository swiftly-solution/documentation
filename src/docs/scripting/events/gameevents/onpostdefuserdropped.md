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
@event returns void
AddEventHandler("OnPostDefuserDropped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |