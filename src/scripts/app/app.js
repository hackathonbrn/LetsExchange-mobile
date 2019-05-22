import $ from 'jquery/dist/jquery';
import '../api/serverTools.js';
import {ServerTools} from '../api/serverTools';
import {RegistrationForm} from '../form/registrationForm';
import {AuthForm} from '../form/authForm';
import {ConsoleForm} from '../form/consoleForm';
import {FindForm} from '../form/findForm';
import {FindLiteForm} from '../form/findLiteForm';

import {Select} from '../components/select';

class App {
	constructor() {
		this.serverTools = new ServerTools();

		$(document).ready(() => {
			if (this.checkVerifyApp()) {
				this.init();
			}
		});
	}

	init() {
		this.serverTools.getConsoles();
		const selects = new Select();
		const registrationForm = new RegistrationForm($('.js-form-registration'));
		const authForm = new AuthForm($('.js-form-auth'));
		const consoleForm = new ConsoleForm($('.js-form-console'));
		const findForm = new FindForm($('.js-form-find'));
		const findLiteForm = new FindLiteForm($('.js-form-finder-lite'));

		const isReg = localStorage.getItem('isRegister');
		const isConsole = localStorage.getItem('consoleId');
		const userId = localStorage.getItem('userId');

		if (!!isReg && isReg === 'Y') {
			if (!!userId) {
				if (!!isConsole) {
					this.serverTools.getExchange(isConsole);
					App.setActiveScreen('.js-screen-main');
				}
				else {
					App.setActiveScreen('.js-screen-console');
				}
			}
			else {
				App.setActiveScreen('.js-screen-auth');
			}
		}
		else {
			App.setActiveScreen('.js-screen-reg');
		}

		$('.js-setscreen-auth').on('click', () => {
			App.setActiveScreen('.js-screen-auth');
		});

		$('.js-setscreen-reg').on('click', () => {
			App.setActiveScreen('.js-screen-reg');
		});

		$('.js-open-find').on('click', () => {
			App.setActiveScreen('.js-screen-find');
		});

		$('.js-open-main').on('click', () => {
			App.setActiveScreen('.js-screen-main');
		});

		$('.js-open-exchange-create').on('click', () => {
			App.setActiveScreen('.js-screen-exchange-create');
		});

		$('.js-add-wish').on('click', () => {
			$('.js-screen-select-game').attr('data-select', 'wish');
			App.setActiveScreen('.js-screen-select-game');
		});

		$('.js-add-have').on('click', () => {
			$('.js-screen-select-game').attr('data-select', 'have');
			App.setActiveScreen('.js-screen-select-game');
		});

		$('.js-submit-auth').on('click', () => {
			App.setActiveScreen('.js-screen-main');
		});

		const buttonExchange = $('.js-exchange-submit');
		buttonExchange.on('click', (e) => {
			if (!!!buttonExchange.attr('href') && !!buttonExchange.data('phone')) {
				e.preventDefault();
				this.cleanButton();
				buttonExchange.html(buttonExchange.data('phone'));
				buttonExchange.attr('href', 'tel:' + buttonExchange.data('phone'));
			}
		});

		$('.js-game-list, .js-game-list-find').
				on('click', '.js-card-exchange', (e) => {
					const card = $(e.target).closest('.js-card-exchange');
					const cardTable = $('.js-game-list-exchange');
					$('.js-exchange-submit').data('phone', card.data('phone'));
					cardTable.find('.js-card-exchange').remove();
					card.clone().prependTo(cardTable);
					if (!!card.data('description')) {
						$('.js-description-block').show();
						$('.js-description').html(card.data('description'));
					}
					else {
						$('.js-description-block').hide();
					}

					App.setActiveScreen('.js-screen-exchange');
				});

		$('.js-game-list-find-single').on('click', '.js-card-game', (e) => {
			let card = $(e.target).closest('.js-card-game');
			let cardTable = $('.js-cards-have');

			if ($('.js-screen-select-game').attr('data-select') === 'wish') {
				cardTable = $('.js-cards-wish');
			}
			cardTable.html(card.clone());

			App.setActiveScreen('.js-screen-exchange-create');
		});

		$('.js-create-change').on('click', ()=>{
			this.serverTools.addExchange({
				wish: $('.js-cards-wish').find('.js-card-game').data('id'),
				have: $('.js-cards-have').find('.js-card-game').data('id'),
				phone: $('.js-exchange-tel').val(),
				description: $('.js-exchange-desc').val(),
			});
		});

	}

	cleanButton() {
		const button = $('.js-exchange-submit');
		button.attr('data-phone', '');
		button.attr('href', '');
	}

	checkVerifyApp() {
		const verifyCode = localStorage.getItem('verifyCode');

		if (!!!verifyCode) {
			localStorage.clear();
			this.serverTools.getVerifyCode();
		}

		return true;
	}

	static setActiveScreen(className) {
		const screens = $('.js-screen');
		screens.fadeOut();
		screens.filter(className).fadeIn();
	}

}

export {App};