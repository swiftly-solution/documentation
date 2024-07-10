---
title: OnUgcMapUnsubscribed
index: true
order: 2
category:
  - Guide
---

# OnUgcMapUnsubscribed
This event is triggered when ugc_map_unsubscribed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUgcMapUnsubscribed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |