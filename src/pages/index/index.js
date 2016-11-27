/**
 * Created by joe on 16/9/25.
 */

const context = {
    title: "exmple"
};



export default class Index {

    constructor() {

    }

    async view(ctx,services) {

        return Object.assign({'message': 'pomjs'}, context);
    }

    async widget(ctx,services) {

        return Object.assign({'message': 'pomjs'}, context);
    }

    async api(ctx,services) {
        const err = new Error("hh");
        err.code = 123;
        throw err;
        return Object.assign({'message': 'pomjs'}, context);
    }

}