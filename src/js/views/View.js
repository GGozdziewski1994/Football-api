export default class View {
    _data;

    render(data) {
        this._data = data;
        this._clear()
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        document.querySelector('.container__text').textContent = '';
        document.querySelector('.container').textContent = '';
        document.querySelector('.table').textContent = '';
    }
}

