import {ServerTools} from '../api/serverTools';
import 'jquery/dist/jquery';

import 'select2/dist/js/select2.full.min';
import $ from 'jquery';

export class FindGame {
	constructor() {
		this.gameList = $('.js-game-list-find-single');
		this.serverTools = new ServerTools();
	}

	addExchangeByConsole(gamesList, find = false) {
		if (!!gamesList && gamesList.success == true) {
			let gameList = $('.js-game-list-find-single');
			console.log(gamesList);

			FindGame.clearlist(gameList);
			if(gamesList.exch.length > 0) {
				gamesList.exch.forEach((data) => {
					gameList.prepend('<div class="card card_lite js-card-game"\n' +
							'\t\t\t     data-id="'+ data.id +'">\n' +
							'\t\t\t\t<div class="card__inner">\n' +
							'\t\t\t\t\t<div class="card__column">\n' +
							'\t\t\t\t\t\t<div class="card__img-wrap">\n' +
							'\t\t\t\t\t\t\t<img src="'+ this.serverTools.storagePath + data.img +'"\n' +
							'\t\t\t\t\t\t\t     alt=""\n' +
							'\t\t\t\t\t\t\t     class="card__img">\n' +
							'\t\t\t\t\t\t</div>\n' +
							'\t\t\t\t\t\t<p class="card__game-title">'+ data.name +'</p>\n' +
							'\t\t\t\t\t</div>\n' +
							'\t\t\t\t</div>\n' +
							'\t\t\t</div>');
				});
			} else {
				gameList.prepend('<p class="centred js-card-exchange">По вашему запросу ничего не найдено</p>');
			}
		}
	}

	static clearlist(gameList) {
		gameList.find('.js-card-game').remove();
	}
}
