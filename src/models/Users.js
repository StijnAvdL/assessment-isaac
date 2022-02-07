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
        await fetch("https://randomuser.me/api/?results=500&inc=gender,name,nat,location,email,nat,phone,login&seed=abc")
            .then(res => res.json())
            .then(data => {
                this.users = data.results
                this.init = false;
            })
            .catch(error => {
                this.init = false;
                this.error = "Could not receive users!";
            });
    }

    getUser(id) {
        // fastest performance comparing to other for loops, foreach and map
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].login.md5 === id) {
                this.user = this.users[i]
                break
            }
        }
    }
}
export default Users