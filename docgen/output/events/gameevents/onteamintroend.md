---
title: OnTeamIntroEnd
index: true
order: 2
category:
  - Guide
---

# OnTeamIntroEnd
This event is triggered when team_intro_end is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamIntroEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |