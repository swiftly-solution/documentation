---
title: OnMbInputLockSuccess
index: true
order: 2
category:
  - Guide
---

# OnMbInputLockSuccess
This event is triggered when mb_input_lock_success is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMbInputLockSuccess", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |