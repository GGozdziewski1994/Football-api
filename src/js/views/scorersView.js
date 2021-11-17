import View from "./View";

class ScorersView extends View {
    _parentElement = document.querySelector('.table');

    _generateMarkup() {
        return `
            <table>
                <thead>
                <tr>
                    <td>Sequence</td>
                    <td>Name</td>
                    <td>Team</td>
                    <td>Position</td>
                    <td>Goals</td>
                    <td>Penalties</td>
                </tr>
                </thead>
                <tbody>
            
                ${this._data.map(this._generateData).join('')}
                
                </tbody>
            </table>
        `;
    }

    _generateData(d, index) {
        return `
            <tr>
                 <td>${index + 1}</td>
                 <td>${d.name}</td>
                 <td>${d.team}</td>
                 <td>${d.position}</td>
                 <td>${d.goals}</td>
                 <td>${d.penalties}</td>
            </tr>
        `;
    }
}

export default new ScorersView();