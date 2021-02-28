import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule
    ],
})
export class MaterialModule {}
