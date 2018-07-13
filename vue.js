//vue.js//

var myVueApp = new Vue({
    el: '#signup-form',
    data: {
        name: 'FDSA',
        email: 'ASDF',
        subject: 'ASDF',
        message: 'ASDF',
    
        },
    
    methods: {
        processForm: function() {
            console.log({
                name: this.name, 
                email:this.email,
                subject: this.subject,
                message: this.message,
            });
            alert('Processing!');
        }

    }
});

