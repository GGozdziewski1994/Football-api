import View from "./View";
import iconPlayer from "../../icon/player1.png";
import iconPosition from "../../icon/position2.png";
import iconGoal from "../../icon/goal2.png";
import iconPenalty from "../../icon/penalty2.png";
import iconTeam from "../../icon/herb.png";

class ScorerView extends View {
    _parentElement = document.querySelector('.container');

    _generateMarkup() {
        return `
        <div class="container__data">
            <img class="container__football-icon" src="${iconPlayer}">
            <h2>Name</h2>
            <div>${this._data.name}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${iconPosition}">
            <h2>Position</h2>
            <div>${this._data.position}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${iconGoal}">
            <h2>Goals</h2>
            <div>${this._data.goals}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${iconPenalty}">
            <h2>Penalties</h2>
            <div>${this._data.penalties}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${iconTeam}">
            <h2>Team</h2>
            <div>${this._data.team}</div>
        </div>
        `;
    }
}

export default new ScorerView();