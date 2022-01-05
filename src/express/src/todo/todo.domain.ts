class TodoDomain {
    private _title: string
    private _description: string
    private _date: Date
    private _created?: Date
    private _id?: number
    constructor(title: string, description: string, date: Date) {
        this._title = title
        this._description = description
        this._date = date
    }

    get title() {
        return this._title
    }

    get description() {
        return this._description
    }

    get date() {
        return this._date
    }

    get id() {
        return this._id
    }

    get created() {
        return this._created
    }
}

export {
    TodoDomain
}