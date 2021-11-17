import View from "./View";

class SquadsView extends View {
    _parentElement = document.querySelector('.table');

    _generateMarkup() {
        return `
            <table>
                <thead>
                <tr>
                    <td>Sequence</td>
                    <td>Team</td>
                    <td>Points</td>
                    <td>Matches</td>
                    <td>Wins</td>
                    <td>Looses</td>
                    <td>Draws</td>
                </tr>
                </thead>
                <tbody>
                
                ${this._data.map(this._generateData).join('')}
                
                </tbody>
            </table>
        `;
    }

    _generateData(d) {
        return `
            <tr>
                <td>${d.position}</td>
                <td>${d.team}</td>
                <td>${d.points}</td>
                <td>${d.matches}</td>
                <td>${d.wins}</td>
                <td>${d.losses}</td>
                <td>${d.draws}</td>
            </tr>
        `;
    }
}

export default new SquadsView();