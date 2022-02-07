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
                console.log("data", data)
                console.log("users", this.users)
                this.init = false;
            })
            .catch(error => {
                console.log("error!", error)
                this.init = false;
                this.error = "Could not receive users!";
            });
    }

    getUser(id) {
        this.error = null;
        this.user = null;
        this.initUser = true;

        fetch(`https://randomuser.me/api/?login.md5=${id}`)
            .then(res => res.json())
            .then(data => {
                this.user = data.results
                this.initUser = false;
            });
    }
}
export default Users