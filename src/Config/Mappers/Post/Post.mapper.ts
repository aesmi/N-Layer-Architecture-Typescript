import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { CreatePostRequestDto } from 'Core/Post/Dtos/CreatePost/CreatePostRequest.dto'
import { CreatePostResponseDto } from 'Core/Post/Dtos/CreatePost/CreatePostResponse.dto'
import { GetPostsByUserRequestDto } from 'Core/Post/Dtos/GetPostsByUser/GetPostsByUserRequest.dto'
import { GetPostsByUserResponseDto } from 'Core/Post/Dtos/GetPostsByUser/GetPostsByUserResponse.dto'
import { IPostEntity } from 'Core/Post/IPostEntity'
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

  toDomainWithManyPosts(payload: IPostModel[]): IPostEntity[] {
    return payload.map(this.toDomain)
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

  toGetPostsByUserRequestDto(
    payload: GetPostsByUserRequestDto
  ): GetPostsByUserRequestDto {
    return {
      userId: payload.userId,
    }
  }

  toGetPostsByUserResponseDto(
    payload: IPostEntity[]
  ): GetPostsByUserResponseDto {
    return {
      posts: payload,
    }
  }
}
