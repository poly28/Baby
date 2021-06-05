new Vue({
	el: '#app',
	data: {
		mamaShow: true,
		boyShow: false,
		girlShow: false,
		boyMessage: false,
		flashMessage0: false,
		flashMessage1: false,
		flashMessage2: false,
		opacityClass: '',
	},
	methods: {
		boyShowChange() {
			this.mamaShow = false;
			this.boyShow = true;
			setTimeout(this.showFlash1, 3000);
		},
		showFlash1() {
			this.flashMessage1 = true;
			setTimeout(this.opacityClass9, 500);
			setTimeout(this.opacityClass7, 500);
			setTimeout(this.opacityClass5, 500);
			setTimeout(this.boySwitch, 3000); // 男の子非表示
			setTimeout(this.girlSwitch, 3000); // 女の子表示
		},
		boySwitch() {
			this.boyShow = false;
		},
		girlSwitch() {
			this.girlShow = true;
			this.flashMessage1 = false;
			this.flashMessage2 = true;
		},
		opacityClass9() {
			this.opacityClass = 'op9';
		},
		opacityClass7() {
			this.opacityClass = 'op7';
		},
		opacityClass5() {
			this.opacityClass = 'op5';
		},
	},
});
