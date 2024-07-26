---
title: OnPostMbInputLockCancel
index: true
order: 2
category:
  - Guide
---

# OnPostMbInputLockCancel
This event is triggered after mb_input_lock_cancel is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostMbInputLockCancel", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |