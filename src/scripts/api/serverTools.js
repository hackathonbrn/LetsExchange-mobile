import $ from 'jquery/dist/jquery';
import {App} from '../app/app';
import {AppKey} from '../app/appKey';
import {ListGame} from '../components/listGame';
import {FindGame} from '../components/findGame';

class ServerTools {
	constructor() {
		this.appKey = AppKey.getKey();
		this.domen = 'http://hackaton.dev.letsrock.pro';
		this.storagePath = this.domen + '/storage/';
	}

	send(data, url, successFunc, type = 'POST') {
		$.ajax({
			headers: {
				'X-CSRF-TOKEN': localStorage.getItem('verifyCode'),
			},
			url: url,
			type: type,
			data: data,
			success: successFunc,
		});
	}

	getVerifyCode() {
		const url = this.domen + '/verifild';

		let backKey = '';
		const callback = (request) => {

			if (!!request) {
				request = JSON.parse(request);

				if (!!!request.error) {
					backKey = request.BACK_KEY;
					localStorage.setItem('verifyCode', backKey);
				}
			}
		};
		const data = {
			APP_KEY: this.appKey,
		};

		$.ajax({
			url: url,
			type: 'POST',
			data: data,
			success: callback,
		});
	}

	getConsoles() {
		const url = this.domen + '/allConsole';

		const callback = (request) => {
			request.forEach((el) => {
				$('.js-consoles').
						append(
								'<input class="js-console" type="radio" id="console' + el.id +
								'" name="console" value="' + el.id +
								'" class="welcome__console-radio">\n' +
								'\t\t\t<label for="console' + el.id +
								'" class="welcome__console-item">\n' +
								el.name +
								'\t\t\t</label>');

				$('.js-console-select').
						append('<option value="' + el.id + '">' + el.name + '</option>');
			});

		};
		const data = {};

		this.send(data, url, callback, 'GET');
	}

	registration(formData) {
		const url = this.domen + '/register';
		// const url = '/ajax/register.json';

		const callback = (request) => {
			if (request.success) {
				localStorage.setItem('userId', request.user.id);
				localStorage.setItem('userName', request.user.name);
				localStorage.setItem('userEmail', request.user.email);
				localStorage.setItem('isRegister', 'Y');
				App.setActiveScreen('.js-screen-console');
			}
		};

		this.send(formData, url, callback);
	}

	auth(formData) {
		const url = this.domen + '/login';

		const callback = (request) => {
			if (request.success) {
				localStorage.setItem('userId', request.user.id);
				localStorage.setItem('userName', request.user.name);
				localStorage.setItem('userEmail', request.user.email);
				localStorage.setItem('isRegister', 'Y');

				if (!!request.user.console) {
					localStorage.setItem('consoleId', request.user.console.id);
					this.getExchange(request.user.console.id);
					App.setActiveScreen('.js-screen-main');
				}
				else {
					App.setActiveScreen('.js-screen-console');
				}
			}
		};

		this.send(formData, url, callback);
	}

	find(formData) {
		const url = this.domen + '/listex';

		const callback = (request) => {
			const listGames = new ListGame();
			listGames.addExchangeByConsole(request, true);
		};

		const data = {
			id_console: localStorage.getItem('currentConsoleId'),
			game_wish: formData.wish,
			game_have: formData.have,
			user_id: localStorage.getItem('userId'),
		};

		this.send(data, url, callback, 'GET');
	}

	getExchange(consoleId) {
		if (!!!consoleId) {
			return 0;
		}

		localStorage.setItem('currentConsoleId', consoleId);
		const url = this.domen + '/listex';
		const callback = (request) => {
			const listGames = new ListGame();
			listGames.addExchangeByConsole(request);
		};
		const data = {
			id_console: consoleId,
			user_id: localStorage.getItem('userId'),
		};
		this.send(data, url, callback, 'GET');
	}

	saveUserConsole(consoleId) {
		const url = this.domen + '/setConsole';
		const callback = (request) => {
			if (request.success) {
				localStorage.setItem('consoleId', consoleId);
			}
		};
		const data = {
			id: localStorage.getItem('consoleId'),
			id_console: consoleId,
		};

		this.send(data, url, callback);
	}

	addExchange(fields) {
		const url = this.domen + '/addExchange';
		const callback = (request) => {
			if (request.success) {
				App.setActiveScreen('.js-screen-main');
			}
		};
		const data = {
			user_id: localStorage.getItem('userId'),
			game_wish: fields.wish,
			game_have: fields.have,
			phone: fields.phone,
			description: fields.description,
		};

		this.send(data, url, callback);
	}

	getGames(query) {
		const url = this.domen + '/search-game';
		const callback = (request) => {
			if (!!request) {
				const findGame = new FindGame();
				findGame.addExchangeByConsole(request);
			}
		};

		this.send({
			'query': query,
			'id_console': localStorage.getItem('consoleId'),
		}, url, callback, 'GET');
	}

	/*
	success = {
		id0: {
			0: {
				time: 783645872364,
				message: 'jahbsdhagsvdvgh'
			},
			2: {
				time: 783645872123,
				message: 'jahbsdhadvgh123o'
			}
		},
		id1: {
			0: {
				time: 783645872364,
				message: 'jahbsdhagsvdvgh'
			},
			2: {
				time: 783645872364,
				message: 'jahbsdhavgh12313'
			}
		}

	}
	 */
	chat(id, url) {
		$.ajax({
			url: url,
			type: 'POST',
			data: {'ID': id},
			cache: false,
			processData: false,
			contentType: false,
			dataType: 'json',
			success: function(request) {

				$(window).trigger('chatNewMessage', ['foo', 'bar']);
			},
		});
	}
}

export {ServerTools};