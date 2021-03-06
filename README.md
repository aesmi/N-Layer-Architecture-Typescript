# N-Layer Architecture in Node with Typescript

This repository is a building block for me, It priortizes on making sure every layer is decoupled from each other. The big benefit is that it allows us to easily switch between technologies and test with ease.

Do note this is my take on writing a **N-Layer Architecture** and I'm in the very beginning of my journey to learn more about TDD/DDD, clean, onion, hexagon architectures. If you have any feedback feel free to open up a an issue with information about how I should 've tackled it instead.

## Layers

### Flow

The Web and Data layer depend on the **Core** layer.

> Web <- **Core** -> Data

### Data

This layer is all about persisting data. Whether it's caching with Redis, having a mocked memory database, orm, odm...
It all belongs in here. You should be very aware that the **Data** depends on **Core**.

### Core

The Core Layer is where all the business related things happen. It's also responsible for creating ports(interfaces),
a port to me means that another layer has to go through this in order to communicate. Pretty much a key to get access to our implementations. Do note, the **Core** layer does not know about implementations of other layers.

### Web

This is where your web application lives. However the awesome thing about an N-Layer Architecture is that we are not building it specifically for the web. So if we wanted a console application we could very much do so!

### Config

I'm not sure whether I should really define this as a Layer, but it's responsibility is to provide data mappers and a **IOC container** to the other layers.

## Use-Cases

- Create a User
- Create a Post as a User
- Get all User related Posts

## Todos:

- [x] Turn User into a module for both Core and Data
- [x] Add Mapper
- [x] Put database in its own Module
- [x] DI in Data layer (repository)
- [x] Replace mocked database with a real one
- [x] Setup IOC Container
- [x] Build a basic express server
- [x] Add tests
- [x] Add interfaces for Core entity
- [x] Implement absolute paths
- [x] Create a post with user
- [x] Get user posts by user
- [x] Refactor API Server with inversify express utils
- [ ] Add final tests

## Next

- [ ] Research aggregated roots, bound context, value objects
