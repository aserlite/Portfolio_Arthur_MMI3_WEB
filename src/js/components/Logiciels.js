function setDatas(context, data) {
    context.datas = data;
    context.baseDatas = data;
}

export default function Logiciels(datas) {
    return {
        datas: [],
        init() {
            fetch(datas)
                .then(response => response.json())
                .then(data => setDatas(this, data))
                .catch(error => console.error('Erreur de chargement:', error));
        },
    }
}