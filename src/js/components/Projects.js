function setDatas(context, data) {
    context.datas = data;
    context.baseDatas = data;
    context.totalPages = Math.ceil(data.length / context.perPage);
}

export default function Projects(datas) {
    return {
        currentPage: 1,
        perPage: 6,
        totalPages: 0,
        datas: [],
        baseDatas: [],
        genreFilter: '',
        init() {
            fetch(datas)
                .then(response => response.json())
                .then(data => setDatas(this, data))
                .catch(error => console.error('Erreur de chargement:', error));
        },
        get uniqueGenres() {
            return [...new Set(this.baseDatas.map(project => project.genre))];
        },
        get filteredProjects() {
            let filtered = this.baseDatas;

            if (this.genreFilter) {
                filtered = filtered.filter(project => project.genre === this.genreFilter);
            }

            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return filtered.slice(start, end);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        toggleZoom(index) {
            this.filteredProjects.forEach((project, i) => {
                if (i === index) {
                    project.zoomed = !project.zoomed || undefined;
                } else {
                    project.zoomed = false;
                }
            });
        }
    }
}