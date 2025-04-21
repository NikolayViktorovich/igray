import { UrlBuilder } from '../base.config'

class AdminApiUrl extends UrlBuilder {
	constructor() {
		super('/admin')
	}

	getSteamOrders(query: string): string {
		return this.withQuery('/get_steam_orders', query)
	}
}

export const adminApiUrl = new AdminApiUrl()
