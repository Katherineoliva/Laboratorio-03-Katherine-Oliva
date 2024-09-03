const countVotes = (votes) => {
    const results = {};
    votes.forEach(vote => {
        const candidate = vote.candidate;
        if (results[candidate]) {
            results[candidate]++;
        } else {
            results[candidate] = 1;
        }
    });

    return results;
};

const showResults = (results) => {

    alert("Resultado de la votación ->");
    for (const candidate in results) {
        alert(`${candidate}: ${results[candidate]} votos`);
    }
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    const results = countVotes(votes);
    showResults(results);
};

main();

