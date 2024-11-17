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
--- @param content string
--- @return void
httpresponse:WriteBody(content)
```
## GetHeaders
```lua
--- @return table
httpresponse:GetHeaders()
```
## GetHeader
```lua
--- @param key string
--- @return string
httpresponse:GetHeader(key)
```
## SetHeader
```lua
--- @param key string
--- @param params string
--- @return void
httpresponse:SetHeader(key, params)
```
## Send
```lua
--- @param response_code number
--- @return void
httpresponse:Send(response_code)
```
## IsCompleted
```lua
--- @return boolean
httpresponse:IsCompleted()
```

:::