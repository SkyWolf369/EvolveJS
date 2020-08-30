import { Payload } from "../../../Interfaces/Interfaces";
import { EvolveClient, EVENTS } from "../../..";

export default class {
	constructor(client: EvolveClient, payload: Payload) {
		client.api.getChannel(payload.d.id).then(o => client.emit(EVENTS.CHANNEL_DELETE, o));
	}
}
