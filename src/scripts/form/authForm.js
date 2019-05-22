import {BaseForm} from '../base-form';
import $ from 'jquery/dist/jquery';
import 'jquery-validation';
import {ServerTools} from '../api/serverTools';

export class AuthForm extends BaseForm {

	init() {
		this.$element.validate();
		this.serverTools = new ServerTools();
		this.$element.find('.js-hidden-input').
				attr('value', localStorage.getItem('verifyCode'));

		$('.js-submit-auth').on('click', () => {
			this.$element.trigger('submit');
		});

		this.$element.on('submit', (e) => {
			const valid = this.$element.valid();

			if (valid) {
				e.preventDefault();
				const $form = this.$element;
				let formData = $form.serialize();
				this.serverTools.auth(formData);
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