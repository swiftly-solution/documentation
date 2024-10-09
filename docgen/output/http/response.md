---
title: HTTPResponse
index: true
order: 2
category:
  - Guide
---

# HTTPResponse
A HTTP Response is an object which stores informations about what the server should return to the client request.
::: tabs
@tab Lua
# Constructor
```lua
HTTPResponse()
```
# Properties
There are no properties available for this class.
# Functions
## WriteBody
```lua
@returns void
httpresponse:WriteBody(content --[[ string ]])
```
## GetHeaders
```lua
@returns table
httpresponse:GetHeaders()
```
## GetHeader
```lua
@returns string
httpresponse:GetHeader(key --[[ string ]])
```
## SetHeader
```lua
@returns void
httpresponse:SetHeader(key --[[ string ]], params --[[ string ]])
```
## Send
```lua
@returns void
httpresponse:Send(response_code --[[ number ]])
```
## IsCompleted
```lua
@returns boolean
httpresponse:IsCompleted()
```

:::