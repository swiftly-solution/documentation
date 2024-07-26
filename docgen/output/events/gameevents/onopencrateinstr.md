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
@event returns void
AddEventHandler("OnOpenCrateInstr", function(event --[[ Event ]])
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