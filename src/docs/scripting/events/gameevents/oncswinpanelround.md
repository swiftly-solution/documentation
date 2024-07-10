---
title: OnCsWinPanelRound
index: true
order: 2
category:
  - Guide
---

# OnCsWinPanelRound
This event is triggered when cs_win_panel_round is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsWinPanelRound", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
| `show_timer_defend` | `boolean` |
| `show_timer_attack` | `boolean` |
|     `timer_time`    |   `int`   |
|    `final_event`    |   `int`   |
|   `funfact_token`   |  `string` |
|   `funfact_player`  |   `int`   |
|   `funfact_data1`   |   `int`   |
|   `funfact_data2`   |   `int`   |
|   `funfact_data3`   |   `int`   |