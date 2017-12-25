class Store extends Sunset.Service.Store {

	constructor() {
		super();
	}

	URLS = {
		LIST: '/service/business/content',
		SAVE: '/service/business/content',
		DELETE: '/service/business/content/{id}',
		GET_BY_ID : '/service/business/content/{id}'
	}

}

export default new Store();