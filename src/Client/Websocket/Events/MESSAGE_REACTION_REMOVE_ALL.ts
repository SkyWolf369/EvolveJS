
import { Payload } from "../../../Interfaces/Interfaces";
import { EvolveClient, EVENTS } from "../../..";

export default class {
	constructor(client: EvolveClient, payload: Payload) {
		const { channel_id, message_id, guild_id } = payload.d;

		const channel = client.channels.get(channel_id);
		const message = client.messages.get(message_id);
		const guild = client.guilds.get(guild_id);
		client.emit(EVENTS.MESSAGE_REACTION_REMOVE_All, message, channel, guild);
	}
}
