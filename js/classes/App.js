class App {
    // construction de l'API a récupérer
    constructor(options) {
        this.apiUrl = options.apiUrl;
        this.collectionApi = this.apiUrl + options.collectionApi;
        this.postApi = this.apiUrl + options.collectionApi + options.postApi;

        options.titleElement.innerHTML = options.titleNameHTML;
    }
}