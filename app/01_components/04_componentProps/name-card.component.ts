import { Component } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: "namecard",
    templateUrl: "name-card.component.html",
    inputs: ["firstName", "lastName"]
})

export class NameCardComponent {
    firstName: string;

    private _lastName: string;

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}