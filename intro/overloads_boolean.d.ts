declare function create(p: true): string;
declare function create(p: false): number;
declare function create(p: boolean): string | number;

let value: boolean = getValue();
create(value) //string | number
