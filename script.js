var vm = new Vue({
	el: '.my-div',
	data: {
		message: "Hello Vue Js",
		votes: 0,
		name:'',
		firstName: '',
		lastName: '',
		fullName: '',
		firstNum: 0,
		secondNum: 0,
		result: 0,
		courses: [
			{title:'HTML', inventor: 'Tim Berners-Lee'},
			{title:'CSS', inventor: 'Hakon Wium Lie'},
			{title:'PHP', inventor: 'Rasmus Lerdorf'},
			{title:'JavaScript', inventor: 'Brendan Eich'},
			{title:'MySQL', inventor: 'Tim Berners-Lee'},
			{title:'Java', inventor: 'James Gosling'},
			{title:'C', inventor: 'Dennis Ritchie'},
			{title:'Python', inventor: 'Guido van Rossum'},
			{title:'Laravel', inventor: 'Taylor Otwell'},
			{title:'Linux', inventor: 'Linus Torvalds'},
			{title:'COMPUTER', inventor: 'Charles Babbage'},
			{title:'COBOL', inventor: 'Grace Murray Hopper'},
		]

	},
	methods: {
		makeFullName : function(){
			this.fullName = this.firstName+' '+this.lastName;
		},
		add: function(){
			this.result = Number(this.firstNum)+Number(this.secondNum);
		},
		sub: function(){
			this.result = this.firstNum-this.secondNum;
		},
		mul: function(){
			this.result = this.firstNum*this.secondNum;
		},
		div: function(){
			this.result = this.firstNum/this.secondNum;
		},
		rem: function(){
			this.result = this.firstNum%this.secondNum;
		},
	}
});