import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

/*****Components****/
import { AppComponent } from './app.component';
import * as fromComponents from './components';

/***** modules ****/
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DynamicFormsModule } from './shared/modules/forms/forms.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Only for dev
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/***** routing ****/
import { AppRoutingModule } from './app-routing.module';

/******reducer******/
import { CustomSerializer, effects, reducers } from './store';

/*******/
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const ImportedComponents : any[] = [
  AppComponent,
  ...fromComponents.components,
];

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

const ImportedModules : any[] = [
  FormsModule,
  ReactiveFormsModule,
  DynamicFormsModule,
  BrowserAnimationsModule,
  CoreModule,
  SharedModule,
  AppRoutingModule,
  HttpClientModule,
  RouterModule,
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot(effects),
  StoreRouterConnectingModule,
  !environment.production ? StoreDevtoolsModule.instrument() : []
];

@NgModule({
  declarations: [
    ...ImportedComponents
  ],
  imports: [
    BrowserModule,
    ...ImportedModules,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }, { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }