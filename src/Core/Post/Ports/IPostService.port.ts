import { CreatePostRequestDto } from '../Dtos/CreatePost/CreatePostRequest.dto'
import { CreatePostResponseDto } from '../Dtos/CreatePost/CreatePostResponse.dto'
import { GetPostsByUserResponseDto } from '../Dtos/GetPostsByUser/GetPostsByUserResponse.dto'
import { GetPostsByUserRequestDto } from '../Dtos/GetPostsByUser/GetPostsByUserRequest.dto'

export interface IPostService {
  createPost(payload: CreatePostRequestDto): Promise<CreatePostResponseDto>
  getPostsByUser(
    payload: GetPostsByUserRequestDto
  ): Promise<GetPostsByUserResponseDto>
}
