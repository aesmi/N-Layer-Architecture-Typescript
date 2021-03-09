import { CreatePostRequestDto } from '../Dtos/CreatePostRequest.dto'
import { CreatePostResponseDto } from '../Dtos/CreatePostResponse.dto'

export interface IPostService {
  createPost(payload: CreatePostRequestDto): Promise<CreatePostResponseDto>
}
