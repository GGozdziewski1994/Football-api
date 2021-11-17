import View from "./View";
import iconHerb from '../../icon/herb.png';
import iconPosition from '../../icon/position.png';
import iconPoint from '../../icon/point.png';
import iconWhistle from '../../icon/whistle.png';
import iconWin from '../../icon/win.png';
import iconLose from '../../icon/lose.jpg';
import iconDraw from '../../icon/draw.png';

class SquadView extends View {
    _parentElement = document.querySelector('.container');

    _generateMarkup() {
        return `
            <div class="container__data">
                <img class="container__football-icon" src="${iconHerb}">
                <h2>Team</h2>
                <div>${this._data.team}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconPosition}">
                <h2>Position</h2>
                <div>${this._data.position}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconPoint}">
                <h2>Points</h2>
                <div>${this._data.points}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconWhistle}">
                <h2>Matches Played</h2>
                <div>${this._data.matches}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconWin}">
                <h2>Wins</h2>
                <div>${this._data.wins}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconLose}">
                <h2>Losses</h2>
                <div>${this._data.losses}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${iconDraw}">
                <h2>Draws</h2>
                <div>${this._data.draws}</div>
            </div>
        `;
    }
}

export default new SquadView();