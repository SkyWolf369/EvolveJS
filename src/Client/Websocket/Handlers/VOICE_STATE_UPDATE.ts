import { EvolveClient, EVENTS, Payload } from "../../..";
import { VoiceState } from "../../../Structures/Guild/VoiceState";

export default class {
	constructor(client: EvolveClient, payload: Payload, shard: number) {
		client.emit(
			EVENTS.VOICE_STATE_UPDATE,
			new VoiceState(payload.d, client),
			shard
		);
	}
}
