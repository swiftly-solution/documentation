---
title: OnTrExitHintTrigger
index: true
order: 2
category:
  - Guide
---

# OnTrExitHintTrigger
This event is triggered when tr_exit_hint_trigger is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrExitHintTrigger", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |