var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let TravelService = class TravelService {
    trips = [
        { id: 1, name: 'To China', price: 9000 },
        { id: 2, name: 'To Morocco', price: 4000 },
    ];
    findAll() {
        return this.trips;
    }
    findOne(id) {
        const trip = this.trips.find((trip) => trip.id === id);
        if (!trip) {
            throw new NotFoundException(`Trip with ID ${id} not found`);
        }
        return trip;
    }
};
TravelService = __decorate([
    Injectable()
], TravelService);
export { TravelService };
//# sourceMappingURL=travel.service.js.map