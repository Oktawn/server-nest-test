import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) { }

  @Get()
  listLikes() {
    return this.likeService.listLikes();
  }

  @Post('/:cat_id')
  newLike(@Param() params: any) {
    return this.likeService.newLike(params.cat_id);
  }

  @Delete('/:cat_id')
  dropLike(@Param() params: any) {
    return this.likeService.dropLike(params.cat_id);
  }
}
