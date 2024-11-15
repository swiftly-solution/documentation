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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnNextlevelChanged", function(event)
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