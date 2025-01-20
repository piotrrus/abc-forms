import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CoreModule } from 'src/cor/core.module';
// import { SharedModule } from 'src/shared/modules/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/shared/modules/core.module';
import { SharedModule } from 'src/shared/modules/shared.modules';

@NgModule({
     declarations: [AppComponent],
     imports: [
          CoreModule,
          SharedModule,
          // BrowserModule,
          AppRoutingModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
