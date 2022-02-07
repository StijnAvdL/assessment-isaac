import { observable, action } from "mobx";
import regeneratorRuntime from "regenerator-runtime"; // TODO: receive error without this import

class Users {
    @observable users = []
    @observable user = null
    @observable init = true;
    @observable initUser = true;
    @observable error = null;

    constructor() {
        console.log("create user model")
        this._onReceive();
    }

    async _onReceive() {
        this.init = true;
        await fetch("https://randomuser.me/api/?results=100")
            .then(res => res.json())
            .then(data => {
                this.users = data.results
                this.init = false;
            })
            .catch(error => {
                console.log("error!", error)
                this.init = false;
                this.error = "Could not receive users!";
            });
    }

    getUser(id) {
        this.users.forEach(user => {
            if (user.login.md5 === id) {
                this.user = user
            }
        })
    }
}
export default Users