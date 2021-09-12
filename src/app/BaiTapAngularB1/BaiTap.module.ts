import { FormsModule } from '@angular/forms';
import { BaiTapComponent } from './BaiTap.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [BaiTapComponent],
    declarations: [BaiTapComponent],

})
export class ModuleBaiTap { }
