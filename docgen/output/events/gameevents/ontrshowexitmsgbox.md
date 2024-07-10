---
title: OnTrShowExitMsgbox
index: true
order: 2
category:
  - Guide
---

# OnTrShowExitMsgbox
This event is triggered when tr_show_exit_msgbox is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrShowExitMsgbox", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |