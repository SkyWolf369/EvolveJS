import { EvolveClient, EVENTS, Payload, Guild } from "../../..";
import { GuildEvents } from "../../Events/GuildEvents";

export default class {
	constructor(client: EvolveClient, payload: Payload, shard: number) {
		let guild = payload.d;
		guild = new Guild(guild, client);
		client.emit(EVENTS.GUILD_UPDATE, new GuildEvents(client, guild, shard));
	}
}