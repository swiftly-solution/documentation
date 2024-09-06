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
UserMessage(message --[[ string ]])
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
usermessage:HasField(fieldName --[[ string ]])
```
## GetInt32
```lua
@returns number
usermessage:GetInt32(fieldName --[[ string ]])
```
## SetInt32
```lua
@returns void
usermessage:SetInt32(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedInt32
```lua
@returns number
usermessage:GetRepeatedInt32(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedInt32
```lua
@returns void
usermessage:SetRepeatedInt32(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddInt32
```lua
@returns void
usermessage:AddInt32(fieldName --[[ string ]], index --[[ number ]])
```
## GetInt64
```lua
@returns number
usermessage:GetInt64(fieldName --[[ string ]])
```
## SetInt64
```lua
@returns void
usermessage:SetInt64(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedInt64
```lua
@returns number
usermessage:GetRepeatedInt64(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedInt64
```lua
@returns void
usermessage:SetRepeatedInt64(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddInt64
```lua
@returns void
usermessage:AddInt64(fieldName --[[ string ]], value --[[ number ]])
```
## GetUInt32
```lua
@returns number
usermessage:GetUInt32(fieldName --[[ string ]])
```
## SetUInt32
```lua
@returns void
usermessage:SetUInt32(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedUInt32
```lua
@returns number
usermessage:GetRepeatedUInt32(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedUInt32
```lua
@returns void
usermessage:SetRepeatedUInt32(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddUInt32
```lua
@returns number
usermessage:AddUInt32(fieldName --[[ string ]], value --[[ number ]])
```
## GetUInt64
```lua
@returns number
usermessage:GetUInt64(fieldName --[[ string ]])
```
## SetUInt64
```lua
@returns void
usermessage:SetUInt64(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedUInt64
```lua
@returns number
usermessage:GetRepeatedUInt64(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedUInt64
```lua
@returns void
usermessage:SetRepeatedUInt64(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddUInt64
```lua
@returns void
usermessage:AddUInt64(fieldName --[[ string ]], value --[[ number ]])
```
## GetInt64OrUnsigned
```lua
@returns number
usermessage:GetInt64OrUnsigned(fieldName --[[ string ]])
```
## SetInt64OrUnsigned
```lua
@returns void
usermessage:SetInt64OrUnsigned(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedInt64OrUnsigned
```lua
@returns number
usermessage:GetRepeatedInt64OrUnsigned(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedInt64OrUnsigned
```lua
@returns void
usermessage:SetRepeatedInt64OrUnsigned(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddInt64OrUnsigned
```lua
@returns number
usermessage:AddInt64OrUnsigned(fieldName --[[ string ]], value --[[ number ]])
```
## GetBool
```lua
@returns boolean
usermessage:GetBool(fieldName --[[ string ]])
```
## SetBool
```lua
@returns void
usermessage:SetBool(fieldName --[[ string ]], value --[[ boolean ]])
```
## GetRepeatedBool
```lua
@returns boolean
usermessage:GetRepeatedBool(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedBool
```lua
@returns void
usermessage:SetRepeatedBool(fieldName --[[ string ]], index --[[ number ]], value --[[ boolean ]])
```
## AddBool
```lua
@returns void
usermessage:AddBool(fieldName --[[ string ]], value --[[ boolean ]])
```
## GetFloat
```lua
@returns number
usermessage:GetFloat(fieldName --[[ string ]])
```
## SetFloat
```lua
@returns void
usermessage:SetFloat(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedFloat
```lua
@returns number
usermessage:GetRepeatedFloat(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedFloat
```lua
@returns void
usermessage:SetRepeatedFloat(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddFloat
```lua
@returns void
usermessage:AddFloat(fieldName --[[ string ]], value --[[ number ]])
```
## GetDouble
```lua
@returns number
usermessage:GetDouble(fieldName --[[ string ]])
```
## SetDouble
```lua
@returns void
usermessage:SetDouble(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedDouble
```lua
@returns number
usermessage:GetRepeatedDouble(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedDouble
```lua
@returns void
usermessage:SetRepeatedDouble(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddDouble
```lua
@returns number
usermessage:AddDouble(fieldName --[[ string ]])
```
## GetFloatOrDouble
```lua
@returns number
usermessage:GetFloatOrDouble(fieldName --[[ string ]])
```
## SetFloatOrDouble
```lua
@returns void
usermessage:SetFloatOrDouble(fieldName --[[ string ]], value --[[ number ]])
```
## GetRepeatedFloatOrDouble
```lua
@returns number
usermessage:GetRepeatedFloatOrDouble(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedFloatOrDouble
```lua
@returns void
usermessage:SetRepeatedFloatOrDouble(fieldName --[[ string ]], index --[[ number ]], value --[[ number ]])
```
## AddFloatOrDouble
```lua
@returns number
usermessage:AddFloatOrDouble(fieldName --[[ string ]], value --[[ number ]])
```
## GetString
```lua
@returns string
usermessage:GetString(fieldName --[[ string ]])
```
## SetString
```lua
@returns void
usermessage:SetString(fieldName --[[ string ]], value --[[ string ]])
```
## GetRepeatedString
```lua
@returns string
usermessage:GetRepeatedString(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedString
```lua
@returns void
usermessage:SetRepeatedString(fieldName --[[ string ]], index --[[ number ]], value --[[ string ]])
```
## AddString
```lua
@returns void
usermessage:AddString(fieldName --[[ string ]], value --[[ string ]])
```
## GetColor
```lua
@returns Color
usermessage:GetColor(fieldName --[[ string ]])
```
## SetColor
```lua
@returns void
usermessage:SetColor(fieldName --[[ string ]], value --[[ Color ]])
```
## GetRepeatedColor
```lua
@returns Color
usermessage:GetRepeatedColor(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedColor
```lua
@returns void
usermessage:SetRepeatedColor(fieldName --[[ string ]], index --[[ number ]], value --[[ Color ]])
```
## AddColor
```lua
@returns void
usermessage:AddColor(fieldName --[[ string ]], value --[[ Color ]])
```
## GetVector2D
```lua
@returns Vector2D
usermessage:GetVector2D(fieldName --[[ string ]])
```
## SetVector2D
```lua
@returns void
usermessage:SetVector2D(fieldName --[[ string ]], value --[[ Vector2D ]])
```
## GetRepeatedVector2D
```lua
@returns Vector2D
usermessage:GetRepeatedVector2D(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedVector2D
```lua
@returns void
usermessage:SetRepeatedVector2D(fieldName --[[ string ]], index --[[ number ]], value --[[ Vector2D ]])
```
## AddVector2D
```lua
@returns void
usermessage:AddVector2D(fieldName --[[ string ]], value --[[ Vector2D ]])
```
## GetVector
```lua
@returns Vector
usermessage:GetVector(fieldName --[[ string ]])
```
## SetVector
```lua
@returns void
usermessage:SetVector(fieldName --[[ string ]], value --[[ Vector ]])
```
## GetRepeatedVector
```lua
@returns Vector
usermessage:GetRepeatedVector(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedVector
```lua
@returns void
usermessage:SetRepeatedVector(fieldName --[[ string ]], index --[[ number ]], value --[[ Vector ]])
```
## AddVector
```lua
@returns void
usermessage:AddVector(fieldName --[[ string ]], value --[[ Vector ]])
```
## GetQAngle
```lua
@returns QAngle
usermessage:GetQAngle(fieldName --[[ string ]])
```
## SetQAngle
```lua
@returns number
usermessage:SetQAngle(fieldName --[[ string ]], value --[[ QAngle ]])
```
## GetRepeatedQAngle
```lua
@returns QAngle
usermessage:GetRepeatedQAngle(fieldName --[[ string ]], index --[[ number ]])
```
## SetRepeatedQAngle
```lua
@returns void
usermessage:SetRepeatedQAngle(fieldName --[[ string ]], index --[[ number ]], value --[[ QAngle ]])
```
## AddQAngle
```lua
@returns void
usermessage:AddQAngle(fieldName --[[ string ]], value --[[ QAngle ]])
```
## RemoveRepeatedFieldValue
```lua
@returns void
usermessage:RemoveRepeatedFieldValue(fieldName --[[ string ]], index --[[ number ]])
```
## GetRepeatedFieldCount
```lua
@returns number
usermessage:GetRepeatedFieldCount(fieldName --[[ string ]])
```
## GetMessage
```lua
@returns UserMessage
usermessage:GetMessage(fieldName --[[ string ]])
```
## GetRepeatedMessage
```lua
@returns UserMessage
usermessage:GetRepeatedMessage(fieldName --[[ string ]], index --[[ number ]])
```
## AddMessage
```lua
@returns UserMessage
usermessage:AddMessage(fieldName --[[ string ]])
```
## SendToPlayer
```lua
@returns void
usermessage:SendToPlayer(playerid --[[ number ]])
```
## SendToAllPlayers
```lua
@returns void
usermessage:SendToAllPlayers()
```
This class supports doing operations on them: addition, division, multiplication, substraction.
:::