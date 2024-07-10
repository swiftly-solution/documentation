---
title: OnTrShowFinishMsgbox
index: true
order: 2
category:
  - Guide
---

# OnTrShowFinishMsgbox
This event is triggered when tr_show_finish_msgbox is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTrShowFinishMsgbox", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |