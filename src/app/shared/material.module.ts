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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
        MatProgressSpinnerModule,
        MatTableModule,
        MatDialogModule,
        MatToolbarModule,
        MatSnackBarModule
    ],
    declarations: [],
})
export class MaterialModule {}
