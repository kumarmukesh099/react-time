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



   onSubmit(e){                 //if we use regular method then we need to bind the function to use this
       e.preventDefault();
       if(this.state.text===""){
           this.props.setAlert('Please enter something','light');
       }
       else{
        console.log(this.state.text)
        this.props.searchUsers(this.state.text)
       }
    }
if we use simple method in class then we need to bind the this to use the this in method
onSubmit={this.onSubmit.bind(this)}>



userEffect hook is the replacement of componentDIdMount in functional component

methods use in class and function use in function