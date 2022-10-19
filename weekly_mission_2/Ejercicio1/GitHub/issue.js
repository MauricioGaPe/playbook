const issue = {
    title: 'Error en boton',
    repositoryNAmeAssociated: 'LaunchX',
    status: 'Closed',
    numberOfComents: '16',
    labels: '0',
    author: 'MaGaPe',
    dateCreated: '12/05/2021',
    lastUpdated: '16/05/2021',
    getTitleAndAuthor: function () {
        return `Titulo: ${issue.title} Autor ${issue.author}` 
    },
    getGeneralInfo: function () {
        return `Este repositorio con titulo ${issue.title}  fue creado por ${issue.author} `
    }
}

console.log("Nombre del Repo: " + issue.title);
console.log("Issues totales: " + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());