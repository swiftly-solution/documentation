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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnClientLoadoutChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |