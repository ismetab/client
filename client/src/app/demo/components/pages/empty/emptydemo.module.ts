import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        HttpClientModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
