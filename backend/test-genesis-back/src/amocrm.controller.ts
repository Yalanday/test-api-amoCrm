import { Controller, Post, Body } from '@nestjs/common';
import { AmoCrmService } from './amocrm.service';

@Controller('amocrm')
export class AmoCrmController {
  constructor(private readonly amoCrmService: AmoCrmService) {}

  @Post()
  async getEntities(@Body() body: any) {
    console.log(`POST ${body.content}`)
    switch (body.content) {
      case "contacts":
        return this.amoCrmService.getContacts(body);
      case "companies":
        return this.amoCrmService.getCompanies(body);
      case "leads":
        return this.amoCrmService.getLeads(body);
      default:
        throw new Error("В body.content должно быть 'contacts', 'companies' или 'leads'");
    }
  }
}
