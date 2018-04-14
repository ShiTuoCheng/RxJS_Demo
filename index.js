/*jshint esversion: 6 */
import Rx from 'rxjs';

const observable = Rx.Observable.create((observer) => {
  observer.next('hi');
  setTimeout(() => observer.next('world'));
}).merge(
  Rx.Observable.of([1, 2, 3, 4, 5, 6, 7]).map(v => console.log(v))
);

const observable2 = Rx.Observable.of([1,2,3,4,5,6,7]).flatMap(v => console.log(v));

observable.subscribe((value) => console.log(value));

