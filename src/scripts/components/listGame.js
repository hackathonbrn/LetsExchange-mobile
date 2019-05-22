import {ServerTools} from '../api/serverTools';
import 'jquery/dist/jquery';

import 'select2/dist/js/select2.full.min';
import $ from 'jquery';

export class ListGame {
	constructor() {
		this.gameList = $('.js-game-list');
		this.serverTools = new ServerTools();
	}
	// 0:
	// 		ex_id: 1
	// gameHave:
	// 		categori_id: "1"
	// created_at: "2019-05-18 09:02:00"
	// id: 2
	// img: "games/May2019/CMxUIux8sJsFlYnXcEVz.png"
	// name: "Assassin's Creed Syndicate"
	// updated_at: "2019-05-19 04:19:50"

	addExchangeByConsole(exchangeList, find = false) {
		if (!!exchangeList) {
			let gameList = 1;

			if(find) {
				gameList = $('.js-game-list-find');
			} else {
				gameList = $('.js-game-list');
			}

			ListGame.clearlist(gameList);
			if(exchangeList.length > 0) {
				exchangeList.forEach((data) => {
					gameList.prepend('\t\t\t<div class="card js-card-exchange" data-description="'+ data.ex_all.description +'" data-phone="'+ data.ex_all.phone +'" data-id="' +
									data.ex_id + '">\n' +
									'\t\t\t\t<span class="card__title">\n' +
									data.user.name +
									'\t\t\t\t</span>\n' +
									'\t\t\t\t<span class="card__rank">\n' +
									'\t\t\t\t\t+3\n' +
									'\t\t\t\t</span>\n' +
									'\t\t\t\t<div class="card__inner">\n' +
									'\t\t\t\t\t<div class="card__column card__column_left">\n' +
									'\t\t\t\t\t\t<div class="card__column-title">Предлагает</div>\n' +
									'\t\t\t\t\t\t<div class="card__img-wrap">\n' +
									'\t\t\t\t\t\t\t<img src="' + this.serverTools.storagePath +
									data.gameHave.img + '" alt="" class="card__img">\n' +
									'\t\t\t\t\t\t</div>\n' +
									'\t\t\t\t\t\t<p class="card__game-title">' +
									data.gameHave.name + '</p>\n' +
									'\t\t\t\t\t</div>\n' +
									'\t\t\t\t\t<div class="card__column card__column_right">\n' +
									'\t\t\t\t\t\t<div class="card__column-title">Хочет</div>\n' +
									'\t\t\t\t\t\t<div class="card__img-wrap">\n' +
									'\t\t\t\t\t\t\t<img src="' + this.serverTools.storagePath +
									data.gameWish.img + '" alt="" class="card__img">\n' +
									'\t\t\t\t\t\t</div>\n' +
									'\t\t\t\t\t\t<p class="card__game-title">' +
									data.gameWish.name + '</p>\n' +
									'\t\t\t\t\t</div>\n' +
									'\t\t\t\t</div>\n' +
									'\t\t\t</div>\n');
				});
			} else {
				gameList.prepend('<p class="centred js-card-exchange">По вашему запросу ничего не найдено</p>');
			}
		}
	}

	static clearlist(gameList) {
		gameList.find('.js-card-exchange').remove();
	}
}
