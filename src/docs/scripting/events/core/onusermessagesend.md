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
--- @param event Event
--- @param usermessage_uuid string
--- @param isreliable boolean
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnUserMessageSend", function(event, usermessage_uuid, isreliable)
    --[[ ... ]]
    return EventResult.Continue
end)
```
> [!info]
> The methods to get the clients are preset in [UserMessage](https://swiftlycs2.net/docs/scripting/usermessages/usermessage.html) class: AddClient, RemoveClient, ClearClients, AddClients and GetClients.

#### How can I stop the execution of a User Message?
Simply return `EventResult.Stop` and it will be blocked.

#### How can I get the UserMessage?
To get the user message object, you need to use [GetUserMessage](https://swiftlycs2.net/docs/scripting/utils/misc/getusermessage.html) along with the `usermessage_uuid` parameter.
:::