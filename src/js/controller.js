import * as model from './model.js';
import searchView from "./views/searchView.js";
import scorerView from "./views/scorerView";
import scorersView from "./views/scorersView";
import squadView from "./views/squadView";
import squadsView from "./views/squadsView";


const controlScorer = async function(data) {
    try {
        if(!data.league && !data.player) throw new Error('No data! Please enter data');

        await model.loadScorer(data.league, data.option, data.player);

        if(data.option.startsWith('scorers')) scorersView.render(model.state.scorers);
        else scorerView.render(model.state.scorers[0]);

    } catch (error) {
        console.error(`🎆 ${error}`);
    }
};

const controlSquad = async function (data) {
    try {
        await model.loadSquad(data.league, data.option, data.player);

        if(data.option.startsWith('squads')) squadsView.render(model.state.squad);
        else squadView.render(model.state.squad[0]);

    } catch (error) {
        throw error;
    }
};

const controlOption = async function () {
    const data = searchView.getDataPlayer();

    if (data.option.startsWith('scorer')) return await controlScorer(data);

    if(data.option.startsWith('squad')) return await controlSquad(data);
};

const init = function() {
    searchView.addHandlerSearch(controlOption);
};
init();



