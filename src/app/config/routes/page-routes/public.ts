import { UrlBuilder } from '../base.config'

class PublicUrl extends UrlBuilder {
	constructor() {
		super()
	}

	home(): string {
		return this.root('/')
	}

	contacts(): string {
		return this.root('/contacts')
	}

	pc(): string {
		return this.root('/pc')
	}

	refund(): string {
		return this.root('/refund')
	}

	steam(): string {
		return this.root('/pc/steam')
	}

	frequentQuestions(): string {
		return this.root('/frequent-questions')
	}

	customerReviews(): string {
		return this.root('/customer-reviews')
	}

	aboutServices(): string {
		return this.root('/about-services')
	}

	xboxGame(): string {
		return this.root('/xbox-game')
	}

	playstationGame(): string {
		return this.root('/playstation-game')
	}

	notFound(): string {
		return this.root('/404')
	}

	// auth(): string {
	// 	return this.root('/auth')
	// }

	// explorer(query: string = ''): string {
	// 	return this.withQuery('/explorer', query)
	// }

	// product(id: string = ''): string {
	// 	return this.root(`/product/${id}`)
	// }

	// category(id: string = ''): string {
	// 	return this.root(`/category/${id}`)
	// }
}

export const publicUrl = new PublicUrl()

// class DashboardUrl extends UrlBuilder {
// 	constructor() {
// 		super('/dashboard')
// 	}

// 	home(): string {
// 		return this.root('/')
// 	}

// 	favorites(): string {
// 		return this.root('/favorites')
// 	}
// }

// class StoreUrl extends UrlBuilder {
// 	constructor() {
// 		super('/store')
// 	}

// 	home(storeId: string = ''): string {
// 		return this.root(`/${storeId}`)
// 	}

// 	products(storeId: string = ''): string {
// 		return this.root(`/${storeId}/products`)
// 	}

// 	productCreate(storeId: string = ''): string {
// 		return this.root(`/${storeId}/products/create`)
// 	}

// 	productEdit(storeId: string = '', id: string = ''): string {
// 		return this.root(`/${storeId}/products/${id}`)
// 	}

// 	categories(storeId: string = ''): string {
// 		return this.root(`/${storeId}/categories`)
// 	}

// 	categoryCreate(storeId: string = ''): string {
// 		return this.root(`/${storeId}/categories/create`)
// 	}

// 	categoryEdit(storeId: string = '', id: string = ''): string {
// 		return this.root(`/${storeId}/categories/${id}`)
// 	}

// 	colors(storeId: string = ''): string {
// 		return this.root(`/${storeId}/colors`)
// 	}

// 	colorCreate(storeId: string = ''): string {
// 		return this.root(`/${storeId}/colors/create`)
// 	}

// 	colorEdit(storeId: string = '', id: string = ''): string {
// 		return this.root(`/${storeId}/colors/${id}`)
// 	}

// 	reviews(storeId: string = ''): string {
// 		return this.root(`/${storeId}/reviews`)
// 	}

// 	settings(storeId: string = ''): string {
// 		return this.root(`/${storeId}/settings`)
// 	}
// }

// export const DASHBOARD_URL = new DashboardUrl()
// export const STORE_URL = new StoreUrl()
