import { ContainerModule } from 'inversify'

import { Types } from 'Config/DI/Types'
import { IPostService } from 'Core/Post/Ports/IPostService.port'
import { PostService } from 'Core/Post/Post.service'
import { PostMapper } from 'Config/Mappers/Post/Post.mapper'
import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { IPostRepository } from 'Core/Post/Ports/IPostRepository.port'
import { PostRepository as MongoPostRepository } from 'Data/Drivers/Mongoose/Post/Post.repository'
import { PostController } from 'Web/Post/Post.controller'

export const PostModule = new ContainerModule((bind) => {
  bind<IPostRepository>(Types.PostRepository)
    .to(MongoPostRepository)
    .inSingletonScope()
  bind<IPostService>(Types.PostService).to(PostService).inSingletonScope()
  bind<PostController>(Types.PostHttpController)
    .to(PostController)
    .inSingletonScope()
  bind<IPostMapper>(Types.PostMapper).to(PostMapper).inSingletonScope()
})
