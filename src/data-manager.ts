import { Subject } from 'rxjs';

const mapping = {
    name: ['getFirstName', 'getLastName'],
    age: ['getAge', 'isLegal']
};
const source = new Subject<any>();
const publicSource = this.source.asObservable();

function pushNewObj(obj) {
    this.source.next(obj);
};