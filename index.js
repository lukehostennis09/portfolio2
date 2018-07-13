//index.js//

var myVueApp = new Vue({
    el: '#one_',
    data: {
        title: 'Hello World!',
        text: 'Why was Six Afraid of Seven?',
        subtitle1: 'Because 7 8 9!',
        latin: 'Even though I don\'t speak Latin, check this out!  Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.',
    
        }
    });
    
new Vue({ 
    el: '#two_',
    data: {
        title: 'Things I Can Do',
        latin: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.',
        class1: 'Write all the code',
        class2: 'Stack small boxes',
        class3: 'Read books and stuff',
        class4: 'Drink much coffee',
        class5: 'Lightning bolt',
        class6: 'Shadow clone technique',

    }
});

new Vue({
    el: '#three_',
    data: {
        title: 'A Few Accomplishments',
        morelatin: 'Integer eu ante ornare amet commetus vestibulum.',
        spacetime: 'Possibly broke spacetime',
        space: 'Space is dope!',
        moon: 'Terraformed a small moon',
        moon2: 'Integer eu ante ornare amet.',
        snap: "Snapped dark matter in the wild.",
        snap2: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.',

    }
})

new Vue({
    el: '#four_',
    data: {
        title: 'Contact Me',
        latin: 'Integer eu ante ornare amet commetus vestibulum blandit integer in.',

    }
})

new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      increase: function() {
        this.counter=this.counter+1;
      }
    } 

})