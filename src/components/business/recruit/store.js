class Store extends Sunset.Service.Store {

	constructor() {
		super();
	}

	URLS = {
		LIST: '/service/business/recruit',
		SAVE: '/service/business/recruit',
		DELETE: '/service/business/recruit/{id}',
		GET_BY_ID : '/service/business/recruit/{id}'
	}

}

export default new Store();