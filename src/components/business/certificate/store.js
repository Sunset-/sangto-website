class Store extends Sunset.Service.Store {

	constructor() {
		super();
	}

	URLS = {
		LIST: '/service/business/certificate',
		SAVE: '/service/business/certificate',
		DELETE: '/service/business/certificate/{id}',
		GET_BY_ID : '/service/business/certificate/{id}'
	}

}

export default new Store();