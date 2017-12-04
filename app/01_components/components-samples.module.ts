import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    BookComponent,
    ChapterComponent,
    CounterComponent,
    CounterHostComponent,
    NameCardComponent,
    NameCardHostComponent,
    MessageBoxComponent,
    MessageBoxHostComponent
} from "./index";

@NgModule({
    imports: [CommonModule],
    declarations: [
        BookComponent,
        ChapterComponent,
        CounterComponent,
        CounterHostComponent,
        NameCardComponent,
        NameCardHostComponent,
        MessageBoxComponent,
        MessageBoxHostComponent
    ]
})
export class ComponentsSampleModule {

}