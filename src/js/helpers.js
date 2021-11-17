export const getAPI = async function (league, option, player) {
    try {
        const response = await fetch(`https://football98.p.rapidapi.com/${league}/${option}/${player}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "football98.p.rapidapi.com",
                "x-rapidapi-key": "d59bcae9camshfe0dfe733b9b44ap12b67ajsn2abc9c7c6a95"
            }
        });

        if(!response.ok) throw new Error(`You have not entered all the data! Try again! (${response.status})`);

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
};

