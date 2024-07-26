---
title: OnMbInputLockCancel
index: true
order: 2
category:
  - Guide
---

# OnMbInputLockCancel
This event is triggered when mb_input_lock_cancel is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMbInputLockCancel", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |