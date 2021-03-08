# N-Layer Architecture in Node with Typescript

This repository is a building block for me and anyone else who's interested in writing a more 'advanced'
application without going all bonkers. It priortizes on making sure every layer is decoupled from each other. This allows us
to 'easily' switch between technologies, test with ease and to add features with no worries about breaking a feature.

Do note this is my take on writing a **N-Layer Architecture** and I'm in the very beginning of my journey to learn more about TDD/DDD, clean, onion, hexagon architectures. If you have any feedback feel free to open up a PR or create an issue with information about how I should 've tackled it instead.

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
