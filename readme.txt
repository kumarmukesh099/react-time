Points to remember 
constructor(){     //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super();
        this.state ={
            id : 'id',
            login : 'Mojombo',
            avatar_url :'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url : 'https://github.com/mojombo'
        }
    }

