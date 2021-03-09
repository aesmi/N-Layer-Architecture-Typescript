import { CreatePostRequestDto } from 'Core/Post/Dtos/CreatePost/CreatePostRequest.dto'
import { CreatePostResponseDto } from 'Core/Post/Dtos/CreatePost/CreatePostResponse.dto'
import { GetPostsByUserRequestDto } from 'Core/Post/Dtos/GetPostsByUser/GetPostsByUserRequest.dto'
import { GetPostsByUserResponseDto } from 'Core/Post/Dtos/GetPostsByUser/GetPostsByUserResponse.dto'
import { IPostEntity } from 'Core/Post/IPostEntity'
import { IPostModel } from 'Data/Drivers/Mongoose/Post/Post.model'

export interface IPostMapper {
  toDomain(payload: IPostModel): IPostEntity
  toDomainWithManyPosts(payload: IPostModel[]): IPostEntity[]
  toPersistence(payload: IPostEntity): IPostModel
  toCreatePostRequestDto(payload: CreatePostRequestDto): CreatePostRequestDto
  toCreatePostResponseDto(payload: IPostEntity): CreatePostResponseDto
  toGetPostsByUserRequestDto(
    payload: GetPostsByUserRequestDto
  ): GetPostsByUserRequestDto
  toGetPostsByUserResponseDto(payload: IPostEntity[]): GetPostsByUserResponseDto
}
