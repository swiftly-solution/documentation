---
title: OnPostNextlevelChanged
index: true
order: 2
category:
  - Guide
---

# OnPostNextlevelChanged
This event is triggered after nextlevel_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostNextlevelChanged", function(event)
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