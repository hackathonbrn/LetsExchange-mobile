import {BaseForm} from '../base-form';
import $ from 'jquery/dist/jquery';
import 'jquery-validation';
import {ServerTools} from '../api/serverTools';
import {ListGame} from '../components/listGame';
import {App} from '../app/app';


export class ConsoleForm extends BaseForm {

	init() {
		this.$element.validate();
		this.serverTools = new ServerTools();
		this.$element.find('.js-hidden-input').
				attr('value', localStorage.getItem('verifyCode'));

		$('.js-submit-console').on('click', () => {
			this.$element.trigger('submit');
			App.setActiveScreen('.js-screen-main');
		});

		this.$element.on('submit', (e) => {
			const valid = this.$element.valid();

			if (valid) {
				e.preventDefault();
				const value = this.$element.find('.js-console:checked').val();
				this.serverTools.saveUserConsole(value);
				this.serverTools.getExchange(value);
			}
		});
	}

	submitFunction(form) {
		// console.log(form);
		// const $form = this.$element;
		// let formData = new FormData(form);
		// this.serverTools.registration(formData);
	}
}