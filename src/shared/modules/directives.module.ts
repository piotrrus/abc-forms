import { NgModule } from '@angular/core';
import { TextOnlyDirective } from '../directives/text-only.directive';

const DIRECTIVES = [TextOnlyDirective];
@NgModule({
     declarations: [DIRECTIVES],
     exports: [DIRECTIVES],
})
export class DirectivesModule {}
