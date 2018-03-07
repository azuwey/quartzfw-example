import { EventDispatcher, IEventDispatcher } from 'carnotite';

export default class Button {
	@EventDispatcher
	private _eventDispatcher!: IEventDispatcher;

	public addToCar(item: {
		id: number,
		count: number
	}) {
		this._eventDispatcher.emit('addToCar', item);
	}
}