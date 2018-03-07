import { EventDispatcher, EventListener, IEventDispatcher } from 'carnotite';

export default class Car {
	@EventDispatcher
	private _eventDispatcher!: IEventDispatcher;

	@EventListener('addToCar')
	private listen(item: {
		id: number,
		count: number
	}) {
		console.log(item);
	}
}
