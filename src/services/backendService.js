import {fixedEncodeURIComponent} from '../helpers/dataFetch';
import md5 from "md5";

export default class backendService {
    _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/';
    _apiGetCards = '?developer=Dima';
    _apiCreateCards = 'create?developer=Dima';
    _apiEditCard = 'edit/';
    _token = 'beejee';

    // Базовый url
    async getResource(url, options) {
        const res = await fetch(`${this._apiBase}${url}`, options);

        if (!res.ok) {
            throw new Error(`can't fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    //Стянуть нужные карты
    async getCards(pageNumber = 1, sortField = ["email"]) {
        const url =
            this._apiGetCards +
            "&sort_field=" +
            sortField +
            "&page=" +
            pageNumber;

        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };

        return await this.getResource(url, requestOptions)
    }


    // Создать таск
    async createCard(card) {
        const {username, email, text} = card;
        const form = new FormData();
        const requestOptions = {
            method: "POST",
            body: form
        };

        form.append('username', username);
        form.append('email', email);
        form.append('text', text);

        const res = await this.getResource(this._apiCreateCards, requestOptions);
        return res.message;
    }

    // Редактировать таск
    async editCard(id, card) {
        const {text, status} = card;
        const url =
            this._apiEditCard +
            id +
            this._apiGetCards;
        const form = new FormData();
        const requestOptions = {
            method: "POST",
            body: form
        };
        let signature =
            "status=" +
            fixedEncodeURIComponent(status) +
            "&text=" +
            fixedEncodeURIComponent(text) +
            "&token=" +
            fixedEncodeURIComponent(this._token);

        form.append("status", status);
        form.append("text", text);
        form.append("token", this._token);
        form.append("signature", md5(signature));

        return await this.getResource(url, requestOptions);
    }
}
