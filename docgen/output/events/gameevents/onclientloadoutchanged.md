---
title: OnClientLoadoutChanged
index: true
order: 2
category:
  - Guide
---

# OnClientLoadoutChanged
This event is triggered when client_loadout_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnClientLoadoutChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |