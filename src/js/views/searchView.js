class SearchView {
    _parentElement = document.querySelector('.search');

    getDataPlayer() {
        const option = this._parentElement.querySelector('.search__option').value;
        const league = this._parentElement.querySelector('.search__league').value;
        const player = this._parentElement.querySelector('.search__player').value;
        this._clearInput()
        return { league, player, option }
    }

    _clearInput() {
        this._parentElement.querySelector('.search__league').value = '';
        this._parentElement.querySelector('.search__player').value = '';
        this._parentElement.querySelector('.search__option').value = '';
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}

export default new SearchView();