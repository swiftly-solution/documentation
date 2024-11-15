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
httpresponse:WriteBody(content)
```
## GetHeaders
```lua
@returns table
httpresponse:GetHeaders()
```
## GetHeader
```lua
@returns string
httpresponse:GetHeader(key)
```
## SetHeader
```lua
@returns void
httpresponse:SetHeader(key, params)
```
## Send
```lua
@returns void
httpresponse:Send(response_code)
```
## IsCompleted
```lua
@returns boolean
httpresponse:IsCompleted()
```

:::