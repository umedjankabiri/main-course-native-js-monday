import {UserProps} from "common/types/UserProps.ts";

let users: UserProps

beforeEach(()=> {
    users = {
        '111': {id: 101, name: "Dmitry"},
        '222': {id: 102, name: "Natasha"},
        '333': {id: 103, name: "Valeriy"},
        '444': {id: 104, name: "Katya"}
    }
})

test("should update corresponding user", ()=> {
    users['444'].name = "Ekaterina"
    expect(users['444'].name).toBe("Ekaterina")
    expect(users['444']).toEqual({id: 104, name: "Ekaterina"})
})