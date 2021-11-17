import { getAPI } from "./helpers.js";

export const state = {
    scorers: [],
    squad: [],
};

export const loadScorer = async function (league, option, player) {
    try {
        const data = await getAPI(league, option, player);

        if(!data) throw new Error('The data entered is wrong! Enter correct data!');

        state.scorers = data.map(d => {
            return {
                goals: d.player_goals,
                name: d.player_name,
                penalties: d.player_penalties,
                position: d.player_role,
                team: d.player_squad,
            }
        });
    } catch (error) {
        throw error;
    }
};

export const loadSquad = async function (league, option, player) {
    try {
        const data = await getAPI(league, option, player);

        if(!data) throw new Error('The data entered is wrong! Enter correct data!');

        state.squad = data.map(d => {
            return {
                position: d.squad_position,
                team: d.squad_name,
                points: d.squad_points,
                matches: d.squad_played,
                wins: d.squad_winned,
                losses: d.squad_loosed,
                draws: d.squad_tie,
            }
        })

    } catch (error) {
        throw error;
    }
};





