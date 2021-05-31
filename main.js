new Vue({
	el: '#app',
	data: {
		mamaShow: true,
		boyShow: false,
		girlShow: false,
		boyMessage: false,
		flashMessage1: false,
		flashMessage2: false,
	},
	methods: {
		boyShowChange() {
			this.mamaShow = false;
			this.boyShow = true;

			// setTimeout(() => {
			// 	this.flashMessage1 = true;
			// }, 3000);
			setTimeout(this.showFlash1, 3000);
		},
		showFlash1() {
			this.flashMessage1 = true;
			setTimeout(this.boyHidden, 3000);
			setTimeout(this.showFlash2, 3000);
		},
		boyHidden() {
			this.boyShow = false;
		},
		showFlash2() {
			this.flashMessage1 = false;
			this.girlShow = true;
			this.flashMessage2 = true;
		},
		// girlVisible() {
		// 	this.girlShow = true;
		// },
	},
});
