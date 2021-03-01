import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatNativeDateModule,
        MatProgressSpinnerModule

    ],
})
export class MaterialModule {}
