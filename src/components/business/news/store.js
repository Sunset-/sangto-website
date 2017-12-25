class Store extends Sunset.Service.Store {

	constructor() {
		super();
	}

	URLS = {
		LIST: '/service/business/content',
		SAVE: '/service/business/content',
		DELETE: '/service/business/content/{id}',
	}

	get(key) {
		return this.getAll().then((all) => {
			return all && all[key];
		});
	}

	getAll() {
		return Promise.resolve().then(() => {
			if (this.cacheAll) {
				return this.cacheAll;
			} else {
				return $http({
					url: this.URLS.USE_ALL
				}).then(res => {
					let map = {};
					res && res.forEach(item => {
						map[item.key] = item;
					});
					return this.cacheAll = map;
				});
			}
		});
	}

}

export default new Store();