import { Injectable } from "@nestjs/common";
import { Cat } from "../interface/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(): Cat {
        return this.cats.some(c => 1 == 1)[0];
    }
}