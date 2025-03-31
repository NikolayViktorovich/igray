import { UrlBuilder } from '../base.config'

class PublicApiUrl extends UrlBuilder {
	constructor() {
		super()
	}

	// steam
	steamCheckPromo(): string {
		return this.root('/steam/check_promo')
	}

	steamSendData(): string {
		return this.root('/steam/send_data')
	}

	currency_rate(query: string): string {
		return this.withQuery('/steam/currency_rate', query)
	}
}

export const publicApiUrl = new PublicApiUrl()
