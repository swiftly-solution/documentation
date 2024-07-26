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
@event returns void
AddEventHandler("OnPostNextlevelChanged", function(event --[[ Event ]])
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