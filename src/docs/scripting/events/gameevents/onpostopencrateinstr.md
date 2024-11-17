---
title: OnPostOpenCrateInstr
index: true
order: 2
category:
  - Guide
---

# OnPostOpenCrateInstr
This event is triggered after open_crate_instr is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostOpenCrateInstr", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `subject` |   `int`   |
|   `type`  |  `string` |