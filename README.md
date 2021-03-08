# N-Layer Architecture in Node with Typescript

This repository is a building block for me and anyone else who's interested in writing a more 'advanced'
application without going all bonkers. It priortizes on making sure every layer is decoupled from each other. This allows us
to 'easily' switch between technologies, test with ease and to add features with no sweat!

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
a port to me means that another layer has to go through this in order to communicate. a key to get access to our implementations. Do note, the **Core** layer does not know about implementations of other layers.

### Web

This is where your web application lives. If you don't want it to be web application. However the awesome thing about an N-Layer Architecture is that we are not building it specifically for the web. So if we wanted a console application we could very much do so!

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
- [x] Do we need an IOC Container?
- [x] Build a basic express server
- [x] Add tests
- [x] Add interfaces for Core entity
- [x] Is IService really a port?
- [x] Make sure there are no naming conflicts. e.g "User"
- [ ] Create an aggregated root for User Posts.
- [ ] Implement a create and get posts
- [x] Clean up all imports with Absolute Pathing
- [ ] Do all comment todos
- [ ] Brainstorm: Side Effects, catching events. ~~dont implement~~
- [ ] Create README.md with rules
