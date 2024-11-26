// Dados para o gráfico de pessoas que gostam de praia globalmente
const dataGlobal = [
    {
        x: ['Praias Tranquilas', 'Praias Movimentadas', 'Esportes Aquáticos'],
        y: [50, 30, 20], // Percentagens globais de preferência
        type: 'bar',
        marker: {
            color: ['#1e90ff', '#00bfff', '#4682b4']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Praia (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Praias',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#e0f7fa',
    paper_bgcolor: '#e0f7fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de praia no Colégio Morelli
const dataMorelli = [
    {
        x: ['Praias Tranquilas', 'Praias Movimentadas', 'Esportes Aquáticos'],
        y: [60, 25, 15], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#1e90ff', '#00bfff', '#4682b4']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Praia no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Praias',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#e0f7fa',
    paper_bgcolor: '#e0f7fa'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

