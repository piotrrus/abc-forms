import { NgModule } from '@angular/core';
import { NumberOnlyDirective } from '../directives/number-only.directive';
import { TrimDirective } from '../directives/trim.directive';
import { TextOnlyDirective } from '../directives/text-only.directive';

const DIRECTIVES = [NumberOnlyDirective, TrimDirective, TextOnlyDirective];
@NgModule({
     declarations: [DIRECTIVES],
     exports: [DIRECTIVES],
})
export class DirectivesModule {}
