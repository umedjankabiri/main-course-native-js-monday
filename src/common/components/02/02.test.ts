import {CityProps} from "common/types/TestsProps.ts";

let city: CityProps;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: ("Happy street")
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: ("Happy street")
                    }
                }
            }
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 50000,
                staffCount: 200,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test("test city should be contains 3 houses", ()=> {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.street.title).toBe("White street");
    expect(city.houses[0].address.number).toBe(100);

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.street.title).toBe("Happy street");
    expect(city.houses[1].address.number).toBe(100);

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.street.title).toBe("Happy street");
    expect(city.houses[2].address.number).toBe(101);
})