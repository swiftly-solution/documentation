---
title: OnOpenCrateInstr
index: true
order: 2
category:
  - Guide
---

# OnOpenCrateInstr
This event is triggered when open_crate_instr is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnOpenCrateInstr", function(event)
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