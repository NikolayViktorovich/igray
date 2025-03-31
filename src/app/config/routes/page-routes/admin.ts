import { UrlBuilder } from '../base.config'

class AdminUrl extends UrlBuilder {
	constructor() {
		super('/admin')
	}

	orders(): string {
		return this.root('/orders')
	}
}

export const adminUrl = new AdminUrl()
