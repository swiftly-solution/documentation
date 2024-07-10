---
title: OnResetGameTitledata
index: true
order: 2
category:
  - Guide
---

# OnResetGameTitledata
This event is triggered when reset user titledata; do not automatically write profile
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnResetGameTitledata", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
| `controllerId` |   `int`   |