const pullRequest = {
    title: 'Subir archivos',
    branchName: 'LaunchX',
    dateCreated: '12/06/2022',
    status: 'Closed',
    repositoryNameAssociated: 'MaGaPe',
    getStatus: function () {
        return `El pull llamado ${pullRequest.title} tiene el status ${pullRequest.status}`
    },
    getTitleAndAuthor: function () {
        return `El pull ${pullRequest.title} fue escrito por ${pullRequest.repositoryNameAssociated}`
    }
}

console.log(`Titulo del Pull: ${pullRequest.title}`);
console.log(`${pullRequest.getStatus()}`);
console.log(`${pullRequest.getTitleAndAuthor()}`);