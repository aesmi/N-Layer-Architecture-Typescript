import { CreatePostRequestDto } from 'Core/Post/Dtos/CreatePostRequest.dto'
import { CreatePostResponseDto } from 'Core/Post/Dtos/CreatePostResponse.dto'
import { IPostEntity } from 'Core/Post/IPostEntity'
import { IPostModel } from 'Data/Drivers/Mongoose/Post/Post.model'

export interface IPostMapper {
  toDomain(payload: IPostModel): IPostEntity
  toPersistence(payload: IPostEntity): IPostModel
  toCreatePostRequestDto(payload: CreatePostRequestDto): CreatePostRequestDto
  toCreatePostResponseDto(payload: IPostEntity): CreatePostResponseDto
}
