---
title: OnTeamIntroStart
index: true
order: 2
category:
  - Guide
---

# OnTeamIntroStart
This event is triggered when team_intro_start is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamIntroStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |