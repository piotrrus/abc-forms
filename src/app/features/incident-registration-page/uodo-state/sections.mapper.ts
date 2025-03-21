import { DescriptionDTO } from 'src/description-dto';
import { SECTIONS } from './sections.enum';

export class createSections {
     public mapSection(data: DescriptionDTO, section: string): DescriptionDTO {
          switch (section) {
               case SECTIONS.SECTION1: {
                    this.mapSection1(data);
                    break;
               }
               case SECTIONS.SECTION2: {
                    this.mapSection2(data);
                    break;
               }
               case SECTIONS.SECTION3: {
                    this.mapSection3(data);
                    break;
               }
               case SECTIONS.SECTION4: {
                    this.mapSection4(data);
                    break;
               }
          }
          return data;
     }

     private mapSection1(data: DescriptionDTO): DescriptionDTO {
          return data;
     }

     private mapSection2(data: DescriptionDTO): DescriptionDTO {
          return data;
     }

     private mapSection3(data: DescriptionDTO): DescriptionDTO {
          return data;
     }

     private mapSection4(data: DescriptionDTO): DescriptionDTO {
          return data;
     }
}
