import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [],
  imports: [
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    // CollapseModule.forRoot(),
    // AccordionModule.forRoot(),
    // BsDropdownModule.forRoot(),
  ],
  exports: [
    ButtonsModule,
    ModalModule,
    // CollapseModule,
    // AccordionModule,
    // BsDropdownModule,
  ],
})
export class BootstrapModule {}
