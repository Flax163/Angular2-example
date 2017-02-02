import { Injectable } from "@angular/core";
import {ComponentDto} from "../dto/component.dto";

@Injectable()
export class DynamicService {
    getComponents():ComponentDto[]
    {
        return [new ComponentDto(1), new ComponentDto(2)];
    }
}