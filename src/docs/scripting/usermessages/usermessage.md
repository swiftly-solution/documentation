---
title: UserMessage
index: true
order: 2
category:
  - Guide
---

# UserMessage
A user message is a wrapper for protobuf messages.
::: tabs
@tab Lua
# Constructor
```lua
UserMessage(message)
```
# Properties
There are no properties available for this class.
# Functions
## IsValidMessage
```lua
@returns boolean
usermessage:IsValidMessage()
```
## GetMessageName
```lua
@returns string
usermessage:GetMessageName()
```
## GetMessageID
```lua
@returns number
usermessage:GetMessageID()
```
## HasField
```lua
@returns boolean
usermessage:HasField(fieldName)
```
## GetInt32
```lua
@returns number
usermessage:GetInt32(fieldName)
```
## SetInt32
```lua
@returns void
usermessage:SetInt32(fieldName, value)
```
## GetRepeatedInt32
```lua
@returns number
usermessage:GetRepeatedInt32(fieldName, index)
```
## SetRepeatedInt32
```lua
@returns void
usermessage:SetRepeatedInt32(fieldName, index, value)
```
## AddInt32
```lua
@returns void
usermessage:AddInt32(fieldName, index)
```
## GetInt64
```lua
@returns number
usermessage:GetInt64(fieldName)
```
## SetInt64
```lua
@returns void
usermessage:SetInt64(fieldName, value)
```
## GetRepeatedInt64
```lua
@returns number
usermessage:GetRepeatedInt64(fieldName, index)
```
## SetRepeatedInt64
```lua
@returns void
usermessage:SetRepeatedInt64(fieldName, index, value)
```
## AddInt64
```lua
@returns void
usermessage:AddInt64(fieldName, value)
```
## GetUInt32
```lua
@returns number
usermessage:GetUInt32(fieldName)
```
## SetUInt32
```lua
@returns void
usermessage:SetUInt32(fieldName, value)
```
## GetRepeatedUInt32
```lua
@returns number
usermessage:GetRepeatedUInt32(fieldName, index)
```
## SetRepeatedUInt32
```lua
@returns void
usermessage:SetRepeatedUInt32(fieldName, index, value)
```
## AddUInt32
```lua
@returns number
usermessage:AddUInt32(fieldName, value)
```
## GetUInt64
```lua
@returns number
usermessage:GetUInt64(fieldName)
```
## SetUInt64
```lua
@returns void
usermessage:SetUInt64(fieldName, value)
```
## GetRepeatedUInt64
```lua
@returns number
usermessage:GetRepeatedUInt64(fieldName, index)
```
## SetRepeatedUInt64
```lua
@returns void
usermessage:SetRepeatedUInt64(fieldName, index, value)
```
## AddUInt64
```lua
@returns void
usermessage:AddUInt64(fieldName, value)
```
## GetInt64OrUnsigned
```lua
@returns number
usermessage:GetInt64OrUnsigned(fieldName)
```
## SetInt64OrUnsigned
```lua
@returns void
usermessage:SetInt64OrUnsigned(fieldName, value)
```
## GetRepeatedInt64OrUnsigned
```lua
@returns number
usermessage:GetRepeatedInt64OrUnsigned(fieldName, index)
```
## SetRepeatedInt64OrUnsigned
```lua
@returns void
usermessage:SetRepeatedInt64OrUnsigned(fieldName, index, value)
```
## AddInt64OrUnsigned
```lua
@returns number
usermessage:AddInt64OrUnsigned(fieldName, value)
```
## GetBool
```lua
@returns boolean
usermessage:GetBool(fieldName)
```
## SetBool
```lua
@returns void
usermessage:SetBool(fieldName, value)
```
## GetRepeatedBool
```lua
@returns boolean
usermessage:GetRepeatedBool(fieldName, index)
```
## SetRepeatedBool
```lua
@returns void
usermessage:SetRepeatedBool(fieldName, index, value)
```
## AddBool
```lua
@returns void
usermessage:AddBool(fieldName, value)
```
## GetFloat
```lua
@returns number
usermessage:GetFloat(fieldName)
```
## SetFloat
```lua
@returns void
usermessage:SetFloat(fieldName, value)
```
## GetRepeatedFloat
```lua
@returns number
usermessage:GetRepeatedFloat(fieldName, index)
```
## SetRepeatedFloat
```lua
@returns void
usermessage:SetRepeatedFloat(fieldName, index, value)
```
## AddFloat
```lua
@returns void
usermessage:AddFloat(fieldName, value)
```
## GetDouble
```lua
@returns number
usermessage:GetDouble(fieldName)
```
## SetDouble
```lua
@returns void
usermessage:SetDouble(fieldName, value)
```
## GetRepeatedDouble
```lua
@returns number
usermessage:GetRepeatedDouble(fieldName, index)
```
## SetRepeatedDouble
```lua
@returns void
usermessage:SetRepeatedDouble(fieldName, index, value)
```
## AddDouble
```lua
@returns number
usermessage:AddDouble(fieldName)
```
## GetFloatOrDouble
```lua
@returns number
usermessage:GetFloatOrDouble(fieldName)
```
## SetFloatOrDouble
```lua
@returns void
usermessage:SetFloatOrDouble(fieldName, value)
```
## GetRepeatedFloatOrDouble
```lua
@returns number
usermessage:GetRepeatedFloatOrDouble(fieldName, index)
```
## SetRepeatedFloatOrDouble
```lua
@returns void
usermessage:SetRepeatedFloatOrDouble(fieldName, index, value)
```
## AddFloatOrDouble
```lua
@returns number
usermessage:AddFloatOrDouble(fieldName, value)
```
## GetString
```lua
@returns string
usermessage:GetString(fieldName)
```
## SetString
```lua
@returns void
usermessage:SetString(fieldName, value)
```
## GetRepeatedString
```lua
@returns string
usermessage:GetRepeatedString(fieldName, index)
```
## SetRepeatedString
```lua
@returns void
usermessage:SetRepeatedString(fieldName, index, value)
```
## AddString
```lua
@returns void
usermessage:AddString(fieldName, value)
```
## GetColor
```lua
@returns Color
usermessage:GetColor(fieldName)
```
## SetColor
```lua
@returns void
usermessage:SetColor(fieldName, value)
```
## GetRepeatedColor
```lua
@returns Color
usermessage:GetRepeatedColor(fieldName, index)
```
## SetRepeatedColor
```lua
@returns void
usermessage:SetRepeatedColor(fieldName, index, value)
```
## AddColor
```lua
@returns void
usermessage:AddColor(fieldName, value)
```
## GetVector2D
```lua
@returns Vector2D
usermessage:GetVector2D(fieldName)
```
## SetVector2D
```lua
@returns void
usermessage:SetVector2D(fieldName, value)
```
## GetRepeatedVector2D
```lua
@returns Vector2D
usermessage:GetRepeatedVector2D(fieldName, index)
```
## SetRepeatedVector2D
```lua
@returns void
usermessage:SetRepeatedVector2D(fieldName, index, value)
```
## AddVector2D
```lua
@returns void
usermessage:AddVector2D(fieldName, value)
```
## GetVector
```lua
@returns Vector
usermessage:GetVector(fieldName)
```
## SetVector
```lua
@returns void
usermessage:SetVector(fieldName, value)
```
## GetRepeatedVector
```lua
@returns Vector
usermessage:GetRepeatedVector(fieldName, index)
```
## SetRepeatedVector
```lua
@returns void
usermessage:SetRepeatedVector(fieldName, index, value)
```
## AddVector
```lua
@returns void
usermessage:AddVector(fieldName, value)
```
## GetQAngle
```lua
@returns QAngle
usermessage:GetQAngle(fieldName)
```
## SetQAngle
```lua
@returns number
usermessage:SetQAngle(fieldName, value)
```
## GetRepeatedQAngle
```lua
@returns QAngle
usermessage:GetRepeatedQAngle(fieldName, index)
```
## SetRepeatedQAngle
```lua
@returns void
usermessage:SetRepeatedQAngle(fieldName, index, value)
```
## AddQAngle
```lua
@returns void
usermessage:AddQAngle(fieldName, value)
```
## RemoveRepeatedFieldValue
```lua
@returns void
usermessage:RemoveRepeatedFieldValue(fieldName, index)
```
## GetRepeatedFieldCount
```lua
@returns number
usermessage:GetRepeatedFieldCount(fieldName)
```
## GetMessage
```lua
@returns UserMessage
usermessage:GetMessage(fieldName)
```
## GetRepeatedMessage
```lua
@returns UserMessage
usermessage:GetRepeatedMessage(fieldName, index)
```
## AddMessage
```lua
@returns UserMessage
usermessage:AddMessage(fieldName)
```
## SendToPlayer
```lua
@returns void
usermessage:SendToPlayer(playerid)
```
## SendToAllPlayers
```lua
@returns void
usermessage:SendToAllPlayers()
```
## AddClient
```lua
@returns void
usermessage:AddClient(playerid)
```
## RemoveClient
```lua
@returns void
usermessage:RemoveClient(playerid)
```
## ClearClients
```lua
@returns void
usermessage:ClearClients()
```
## AddClients
```lua
@returns void
usermessage:AddClients()
```
## GetClients
```lua
@returns table
usermessage:GetClients()
```

:::