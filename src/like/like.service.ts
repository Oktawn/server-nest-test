import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from '../entities/like';
import { Repository } from 'typeorm';

@Injectable()
export class LikeService {
    constructor(@InjectRepository(Like) private likeRep: Repository<Like>) { }

    listLikes() {
        return this.likeRep.find();
    }

    newLike(cat_id: string) {
        const like = this.likeRep.create({ cat_id: cat_id, created_at: new Date() });
        return this.likeRep.save(like);
    }

    dropLike(cat_id:string){
        return this.likeRep.delete({cat_id:cat_id})
    }

}
