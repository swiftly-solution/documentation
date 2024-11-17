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
--- @param message string
UserMessage(message)
```
# Properties
There are no properties available for this class.
# Functions
## IsValidMessage
```lua
--- @return boolean
usermessage:IsValidMessage()
```
## GetMessageName
```lua
--- @return string
usermessage:GetMessageName()
```
## GetMessageID
```lua
--- @return number
usermessage:GetMessageID()
```
## HasField
```lua
--- @param fieldName string
--- @return boolean
usermessage:HasField(fieldName)
```
## GetInt32
```lua
--- @param fieldName string
--- @return number
usermessage:GetInt32(fieldName)
```
## SetInt32
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetInt32(fieldName, value)
```
## GetRepeatedInt32
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedInt32(fieldName, index)
```
## SetRepeatedInt32
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedInt32(fieldName, index, value)
```
## AddInt32
```lua
--- @param fieldName string
--- @param index number
--- @return void
usermessage:AddInt32(fieldName, index)
```
## GetInt64
```lua
--- @param fieldName string
--- @return number
usermessage:GetInt64(fieldName)
```
## SetInt64
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetInt64(fieldName, value)
```
## GetRepeatedInt64
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedInt64(fieldName, index)
```
## SetRepeatedInt64
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedInt64(fieldName, index, value)
```
## AddInt64
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:AddInt64(fieldName, value)
```
## GetUInt32
```lua
--- @param fieldName string
--- @return number
usermessage:GetUInt32(fieldName)
```
## SetUInt32
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetUInt32(fieldName, value)
```
## GetRepeatedUInt32
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedUInt32(fieldName, index)
```
## SetRepeatedUInt32
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedUInt32(fieldName, index, value)
```
## AddUInt32
```lua
--- @param fieldName string
--- @param value number
--- @return number
usermessage:AddUInt32(fieldName, value)
```
## GetUInt64
```lua
--- @param fieldName string
--- @return number
usermessage:GetUInt64(fieldName)
```
## SetUInt64
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetUInt64(fieldName, value)
```
## GetRepeatedUInt64
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedUInt64(fieldName, index)
```
## SetRepeatedUInt64
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedUInt64(fieldName, index, value)
```
## AddUInt64
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:AddUInt64(fieldName, value)
```
## GetInt64OrUnsigned
```lua
--- @param fieldName string
--- @return number
usermessage:GetInt64OrUnsigned(fieldName)
```
## SetInt64OrUnsigned
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetInt64OrUnsigned(fieldName, value)
```
## GetRepeatedInt64OrUnsigned
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedInt64OrUnsigned(fieldName, index)
```
## SetRepeatedInt64OrUnsigned
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedInt64OrUnsigned(fieldName, index, value)
```
## AddInt64OrUnsigned
```lua
--- @param fieldName string
--- @param value number
--- @return number
usermessage:AddInt64OrUnsigned(fieldName, value)
```
## GetBool
```lua
--- @param fieldName string
--- @return boolean
usermessage:GetBool(fieldName)
```
## SetBool
```lua
--- @param fieldName string
--- @param value boolean
--- @return void
usermessage:SetBool(fieldName, value)
```
## GetRepeatedBool
```lua
--- @param fieldName string
--- @param index number
--- @return boolean
usermessage:GetRepeatedBool(fieldName, index)
```
## SetRepeatedBool
```lua
--- @param fieldName string
--- @param index number
--- @param value boolean
--- @return void
usermessage:SetRepeatedBool(fieldName, index, value)
```
## AddBool
```lua
--- @param fieldName string
--- @param value boolean
--- @return void
usermessage:AddBool(fieldName, value)
```
## GetFloat
```lua
--- @param fieldName string
--- @return number
usermessage:GetFloat(fieldName)
```
## SetFloat
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetFloat(fieldName, value)
```
## GetRepeatedFloat
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedFloat(fieldName, index)
```
## SetRepeatedFloat
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedFloat(fieldName, index, value)
```
## AddFloat
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:AddFloat(fieldName, value)
```
## GetDouble
```lua
--- @param fieldName string
--- @return number
usermessage:GetDouble(fieldName)
```
## SetDouble
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetDouble(fieldName, value)
```
## GetRepeatedDouble
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedDouble(fieldName, index)
```
## SetRepeatedDouble
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedDouble(fieldName, index, value)
```
## AddDouble
```lua
--- @param fieldName string
--- @return number
usermessage:AddDouble(fieldName)
```
## GetFloatOrDouble
```lua
--- @param fieldName string
--- @return number
usermessage:GetFloatOrDouble(fieldName)
```
## SetFloatOrDouble
```lua
--- @param fieldName string
--- @param value number
--- @return void
usermessage:SetFloatOrDouble(fieldName, value)
```
## GetRepeatedFloatOrDouble
```lua
--- @param fieldName string
--- @param index number
--- @return number
usermessage:GetRepeatedFloatOrDouble(fieldName, index)
```
## SetRepeatedFloatOrDouble
```lua
--- @param fieldName string
--- @param index number
--- @param value number
--- @return void
usermessage:SetRepeatedFloatOrDouble(fieldName, index, value)
```
## AddFloatOrDouble
```lua
--- @param fieldName string
--- @param value number
--- @return number
usermessage:AddFloatOrDouble(fieldName, value)
```
## GetString
```lua
--- @param fieldName string
--- @return string
usermessage:GetString(fieldName)
```
## SetString
```lua
--- @param fieldName string
--- @param value string
--- @return void
usermessage:SetString(fieldName, value)
```
## GetRepeatedString
```lua
--- @param fieldName string
--- @param index number
--- @return string
usermessage:GetRepeatedString(fieldName, index)
```
## SetRepeatedString
```lua
--- @param fieldName string
--- @param index number
--- @param value string
--- @return void
usermessage:SetRepeatedString(fieldName, index, value)
```
## AddString
```lua
--- @param fieldName string
--- @param value string
--- @return void
usermessage:AddString(fieldName, value)
```
## GetColor
```lua
--- @param fieldName string
--- @return Color
usermessage:GetColor(fieldName)
```
## SetColor
```lua
--- @param fieldName string
--- @param value Color
--- @return void
usermessage:SetColor(fieldName, value)
```
## GetRepeatedColor
```lua
--- @param fieldName string
--- @param index number
--- @return Color
usermessage:GetRepeatedColor(fieldName, index)
```
## SetRepeatedColor
```lua
--- @param fieldName string
--- @param index number
--- @param value Color
--- @return void
usermessage:SetRepeatedColor(fieldName, index, value)
```
## AddColor
```lua
--- @param fieldName string
--- @param value Color
--- @return void
usermessage:AddColor(fieldName, value)
```
## GetVector2D
```lua
--- @param fieldName string
--- @return Vector2D
usermessage:GetVector2D(fieldName)
```
## SetVector2D
```lua
--- @param fieldName string
--- @param value Vector2D
--- @return void
usermessage:SetVector2D(fieldName, value)
```
## GetRepeatedVector2D
```lua
--- @param fieldName string
--- @param index number
--- @return Vector2D
usermessage:GetRepeatedVector2D(fieldName, index)
```
## SetRepeatedVector2D
```lua
--- @param fieldName string
--- @param index number
--- @param value Vector2D
--- @return void
usermessage:SetRepeatedVector2D(fieldName, index, value)
```
## AddVector2D
```lua
--- @param fieldName string
--- @param value Vector2D
--- @return void
usermessage:AddVector2D(fieldName, value)
```
## GetVector
```lua
--- @param fieldName string
--- @return Vector
usermessage:GetVector(fieldName)
```
## SetVector
```lua
--- @param fieldName string
--- @param value Vector
--- @return void
usermessage:SetVector(fieldName, value)
```
## GetRepeatedVector
```lua
--- @param fieldName string
--- @param index number
--- @return Vector
usermessage:GetRepeatedVector(fieldName, index)
```
## SetRepeatedVector
```lua
--- @param fieldName string
--- @param index number
--- @param value Vector
--- @return void
usermessage:SetRepeatedVector(fieldName, index, value)
```
## AddVector
```lua
--- @param fieldName string
--- @param value Vector
--- @return void
usermessage:AddVector(fieldName, value)
```
## GetQAngle
```lua
--- @param fieldName string
--- @return QAngle
usermessage:GetQAngle(fieldName)
```
## SetQAngle
```lua
--- @param fieldName string
--- @param value QAngle
--- @return number
usermessage:SetQAngle(fieldName, value)
```
## GetRepeatedQAngle
```lua
--- @param fieldName string
--- @param index number
--- @return QAngle
usermessage:GetRepeatedQAngle(fieldName, index)
```
## SetRepeatedQAngle
```lua
--- @param fieldName string
--- @param index number
--- @param value QAngle
--- @return void
usermessage:SetRepeatedQAngle(fieldName, index, value)
```
## AddQAngle
```lua
--- @param fieldName string
--- @param value QAngle
--- @return void
usermessage:AddQAngle(fieldName, value)
```
## RemoveRepeatedFieldValue
```lua
--- @param fieldName string
--- @param index number
--- @return void
usermessage:RemoveRepeatedFieldValue(fieldName, index)
```
## GetRepeatedFieldCount
```lua
--- @param fieldName string
--- @return number
usermessage:GetRepeatedFieldCount(fieldName)
```
## GetMessage
```lua
--- @param fieldName string
--- @return UserMessage
usermessage:GetMessage(fieldName)
```
## GetRepeatedMessage
```lua
--- @param fieldName string
--- @param index number
--- @return UserMessage
usermessage:GetRepeatedMessage(fieldName, index)
```
## AddMessage
```lua
--- @param fieldName string
--- @return UserMessage
usermessage:AddMessage(fieldName)
```
## SendToPlayer
```lua
--- @param playerid number
--- @return void
usermessage:SendToPlayer(playerid)
```
## SendToAllPlayers
```lua
--- @return void
usermessage:SendToAllPlayers()
```
## AddClient
```lua
--- @param playerid number
--- @return void
usermessage:AddClient(playerid)
```
## RemoveClient
```lua
--- @param playerid number
--- @return void
usermessage:RemoveClient(playerid)
```
## ClearClients
```lua
--- @return void
usermessage:ClearClients()
```
## AddClients
```lua
--- @return void
usermessage:AddClients()
```
## GetClients
```lua
--- @return table
usermessage:GetClients()
```

:::