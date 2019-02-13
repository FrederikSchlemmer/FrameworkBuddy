import { NgModule } from "@angular/core";
import {MatStepperModule, MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({

    imports: [
        MatStepperModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatExpansionModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatStepperModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        MatExpansionModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }