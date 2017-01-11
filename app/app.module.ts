import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {APP_BASE_HREF} from '@angular/common';

/* Kendo Modules Telerik */
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadModule } from '@progress/kendo-angular-upload';
/*  Toasty for popup */

import {ToastModule, ToastOptions, ToastsManager} from 'ng2-toastr/ng2-toastr';

import { HttpModule, JsonpModule  } from '@angular/http';


let options: ToastOptions = new ToastOptions({
    animate: 'flyRight',
    positionClass: 'toast-top-right',
});


@NgModule({
    imports: [BrowserModule,
        HttpModule,
   ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
