/*jshint esversion: 6 */
import Rx from 'rxjs';

const observable = Rx.Observable.create((observer) => {
  observer.next('hi');
  observer.next('world');
});

const observable2 = Rx.Observable.of([1,2,3,4,5,6,7]).map(v => v.map(val => val * 2));

observable2.subscribe((value) => console.log(value));

