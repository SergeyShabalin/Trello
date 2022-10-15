import {Api} from "../Api";

class ColumnsAPI {
    static getAllColumns(){
        return Api.get(`/columns`)
    }
}

export default new ColumnsAPI()