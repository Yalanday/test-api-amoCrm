import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {configAmo} from "./config-amo";

@Injectable()
export class AmoCrmService {

    constructor(private readonly httpService: HttpService) {}

    async getContacts(query?: any) {

        const response = await firstValueFrom(
            this.httpService.get('https://yalanday256.amocrm.ru/api/v4/contacts', {
                headers: {
                    Authorization: `Bearer ${configAmo.accessToken}`,
                },
                params: query,
            }),
        );

        return response.data;
    }

    async getCompanies(query?: any) {
        const response = await firstValueFrom(
            this.httpService.get('https://yalanday256.amocrm.ru/api/v4/companies', {
                headers: {
                    Authorization: `Bearer ${configAmo.accessToken}`,
                },
                params: query,
            }),
        );

        return response.data;
    }

    async getLeads(query?: any) {
        const response = await firstValueFrom(
            this.httpService.get('https://yalanday256.amocrm.ru/api/v4/leads', {
                headers: {
                    Authorization: `Bearer ${configAmo.accessToken}`,
                },
                params: query,
            }),
        );
        return response.data;
    }
}

