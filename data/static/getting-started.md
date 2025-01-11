# Getting Started

<Tabs defaultValue="lua">
  <TabsList class="grid w-full grid-cols-2">
    <TabsTrigger value="lua">Lua</TabsTrigger>
  </TabsList>
  <TabsContent value="lua">
## Mandatory Functions

Below are all of the mandatory functions needed in any Swiftly Lua Plugin, in a single plugin file.

```lua title="main.lua"
function GetPluginAuthor()
    return "AUTHOR"
end

function GetPluginVersion()
    return "VERSION"
end

function GetPluginName()
    return "PLUGIN_NAME"
end

function GetPluginWebsite()
    return "WEBSITE"
end
```
  </TabsContent>
</Tabs>