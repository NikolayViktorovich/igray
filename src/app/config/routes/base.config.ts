export class UrlBuilder {
	constructor(private base: string = '') {}

	root(url: string = ''): string {
		return `${this.base}${url}`
	}

	withQuery(url: string = '', query: string = ''): string {
		const queryString = query ? `?${query}` : ''
		return `${this.root(url)}${queryString}`
	}
}
