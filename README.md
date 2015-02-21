KONA IONIC | Users Example
=====================

#Demo
![Running](http://i.imgur.com/wR2tFg5.gif)

Simple and small sample with sing in and sing up users

# Backend

The backend only have one model and one method, the login method

```js
var login = function(req) {
    if (req.body.get("email") == null) {
        kona.error("email is missing");
    }
    var find = {
        email : req.body.get("email")
    }
    var list = model.buildQuery().find(find).list();
    if (list.size()==0){
        kona.error("user not found");
    }
    var user = list.get(0);
    if (user.get("password") == req.body.get("password")){
        return {success:true};
    }else {
        return {success:false};
    }
};
```

# Client

## Instalation

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone 

```
git clone https://github.com/DanielAron/KONAIonicUsersExample
```

### Configuration

Change the file

```nano cat www/js/app.js ```

```var URL = 'https://app.konacloud.io/api/konacloud/users/mr_User';```

```konacloud/users``` for your user and app


### Install Dependencies

Install Ionic

```npm install -g ionic```

```npm install -g cordova ionic```

Adding the IOS platform
```ionic platform add ios```
```ionic build ios```

Emulate
```ionic emulate ios```

Or just open with the browser with

```ionic serve```
