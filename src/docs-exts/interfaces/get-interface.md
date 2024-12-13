---
title: Get Interface
index: true
order: 2
category:
  - Guide
---

# Get Interface

To get an interface, you need to find out some informations about that interface.

- Interface Factory
- Interface Load Kind
- Interface Variable
- Interface Class
- Interface Name

Is it a server interface, an engine interface, maybe physics? You can figure it out by reading the description of each factory function from [ISmmAPI](https://github.com/alliedmodders/metamod-source/blob/master/core/ISmmAPI.h#L88-L122).

The available factories are: `GetEngineFactory`, `GetPhysicsFactory`, `GetFileSystemFactory` and `GetServerFactory`.

For `GetEngineFactory` and `GetPhysicsFactory`, we're gonna use the `GET_IFACE_CURRENT` function and for the rest, `GET_IFACE_ANY`.

The defintions for the interface load functions are the following:

```cpp
GET_IFACE_CURRENT(FactoryName, variable, class, interface_name);
GET_IFACE_ANY(FactoryName, variable, class, interface_name);
```

The variable, class and name can be found inside [hl2sdk/public/interfaces/interfaces.h](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/interfaces/interfaces.h#L257-L599).

As an example, we're gonna take `NetworkServerService`.

```cpp
#define NETWORKSERVERSERVICE_INTERFACE_VERSION		"NetworkServerService_001"
DECLARE_TIER3_INTERFACE( INetworkServerService, g_pNetworkServerService );
```

The interface name is gonna be `NETWORKSERVERSERVICE_INTERFACE_VERSION`, the variable is gonna be `g_pNetworkServerService` and the class is gonna be `INetworkServerService`.

You also need to find out from which file the class is coming from to include in your extension and create the variable inside `entrypoint.cpp`.

```cpp title="entrypoint.cpp"
Class* variable = nullptr;
```

Now, to fetch the interface we have all we need.

## Determine what factory to use

For engine-related interfaces, we're gonna use `GetEngineFactory`, for physics interfaces we're gonna use `GetPhysicsFactory`, for filesystem interface we're gonna use `GetFileSystemFactory` and for the rest `GetServerFactory`.

## Example - Network Server Service Interface

```cpp title="entrypoint.cpp"
bool EXTENSION::Load(std::string& error, SourceHook::ISourceHook *SHPtr, ISmmAPI* ismm, bool late)
{
    // ...
    GET_IFACE_ANY(GetServerFactory, g_pNetworkServerService, INetworkServerService, NETWORKSERVERSERVICE_INTERFACE_VERSION);
    // ...
    return true;
}
```