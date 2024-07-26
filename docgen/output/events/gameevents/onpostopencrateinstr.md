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
@event returns void
AddEventHandler("OnPostOpenCrateInstr", function(event --[[ Event ]])
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