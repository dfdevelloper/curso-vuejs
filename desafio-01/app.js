new Vue({
    el: '#desafio',
    data: {
        nome: 'danillo',
        idade: 28,
        img: 'data:image/jpeg;base64,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'
    },
    methods: {
        random(){
            return Math.random() * 1;
        }
    }
})