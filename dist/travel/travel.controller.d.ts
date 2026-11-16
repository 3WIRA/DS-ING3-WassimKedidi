import { TravelService } from './travel.service.js';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    findOne(id: number): {
        id: number;
        name: string;
        price: number;
    };
    findAll(): {
        id: number;
        name: string;
        price: number;
    }[];
    createTravel(): string;
}
