import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
import * as Ws from 'ws';

@GatewayDecorator('asd')
export default class IndexGateway {
	@IncomeDecorator('test')
	private name(ws: Ws, message: string) {
		ws.send((new Date()).getTime());
	}
}