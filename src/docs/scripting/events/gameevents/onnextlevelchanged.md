---
title: OnNextlevelChanged
index: true
order: 2
category:
  - Guide
---

# OnNextlevelChanged
This event is triggered when nextlevel_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnNextlevelChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
|   `nextlevel`  |  `string` |
|   `mapgroup`   |  `string` |
| `skirmishmode` |  `string` |