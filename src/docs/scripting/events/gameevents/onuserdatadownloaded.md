---
title: OnUserDataDownloaded
index: true
order: 2
category:
  - Guide
---

# OnUserDataDownloaded
This event is triggered when fired when achievements/stats are downloaded from Steam or XBox Live
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUserDataDownloaded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |