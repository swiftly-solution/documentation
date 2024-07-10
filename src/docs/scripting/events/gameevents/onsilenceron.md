---
title: OnSilencerOn
index: true
order: 2
category:
  - Guide
---

# OnSilencerOn
This event is triggered when silencer_on is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSilencerOn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |