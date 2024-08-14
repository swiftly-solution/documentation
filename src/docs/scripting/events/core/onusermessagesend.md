---
title: OnUserMessageSend
index: true
order: 2
category:
  - Guide
---

# OnUserMessageSend
This game event is triggered when a user message is being sent to a player.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUserMessageSend", function(event --[[ Event ]], playerid --[[ number ]], usermessage_uuid --[[ string ]], isreliable --[[ boolean ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```
> [!info]
> To cancel the user message, you need to return `EventResult.Stop`. This will block the user message from being sent.

#### How can I get the UserMessage?
To get the user message object, you need to use [GetUserMessage](https://swiftlycs2.net/docs/scripting/utils/misc/getusermessage.html) along with the `usermessage_uuid` parameter.
:::