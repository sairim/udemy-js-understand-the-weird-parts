;(function(global, $) {
    
    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    const supportedLangs = ['en', 'es', 'el'];

    const greetings = {
        en: 'Hello',
        es: 'Hola',
        el: 'Γεια'
    }

    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        el: 'Γεια σας'
    }

    const logMessages = {
        en: 'Logged in',
        es: 'Iniciό sesiόn',
        el: 'Συδεδεμένος'
    }

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // this refers to the calling object at execution time
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;  
        },

        // has access to supportedLangs via closure
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) throw "Invalid language";
        },

        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}!`;
        },

        formalGreeting: function() {
            return `${formalGreetings[this.language]} ${this.fullName()}.`;
        },

        greet: function(formal) {
            let msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) console.log(msg);

            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) throw 'Error: jQuery not loaded!';
            if (!selector) throw 'Error: Missing jQuery selector!';
            
            let msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);
            
            return this;
        }
    };

    // the actual object is created here allowing us to 'new' an object
    // without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        
        const self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en'; 

        self.validate();
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object and provide a shorthand '$G' to access it
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);