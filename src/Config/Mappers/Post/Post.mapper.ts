import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { CreatePostRequestDto } from 'Core/Post/Dtos/CreatePostRequest.dto'
import { CreatePostResponseDto } from 'Core/Post/Dtos/CreatePostResponse.dto'
import { IPostEntity } from 'Core/Post/IPostEntity'
import { IUserEntity } from 'Core/User/IUserEntity'
import { IPostModel } from 'Data/Drivers/Mongoose/Post/Post.model'
import { injectable } from 'inversify'

@injectable()
export class PostMapper implements IPostMapper {
  toDomain(payload: IPostModel): IPostEntity {
    return {
      id: payload._id,
      title: payload.title,
      content: payload.content,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
      userId: payload.userId,
    }
  }

  toPersistence(payload: IPostEntity): IPostModel {
    return {
      _id: payload.id,
      title: payload.title,
      content: payload.content,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
      userId: payload.userId!,
    }
  }
  toCreatePostRequestDto(payload: CreatePostRequestDto): CreatePostRequestDto {
    return {
      title: payload.title,
      content: payload.content,
      userId: payload.userId,
    }
  }
  toCreatePostResponseDto(payload: IPostEntity): CreatePostResponseDto {
    return {
      id: payload.id,
      title: payload.title,
      content: payload.content,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
    }
  }
}
