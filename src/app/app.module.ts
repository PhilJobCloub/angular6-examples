import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****Components****/
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import * as fromComponents from './components';

const ImportedComponents: any[] = [
  AppComponent,
  ...fromComponents.components,
]; 


/***** modules ****/
import { HttpClientModule } from '@angular/common/http'; 
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DynamicFormsModule } from './shared/modules/forms/forms.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Only for dev
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/***** routing ****/
import { AppRoutingModule } from './app-routing.module';

/******reducer******/
import { reducers,effects, CustomSerializer } from './store';

/*******/
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const ImportedModules: any[] = [
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
    ...ImportedComponents,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    ...ImportedModules,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
