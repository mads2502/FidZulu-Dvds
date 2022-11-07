let request = require("request");
const base_url = "http://localhost:3033/api";
console.log("Unit test-Backend 3-DVDS");
describe("Test APIs", () => {
    it("returns Avengers", (done) => {
        request.get(base_url + "/dvds", (error, response, body) => {
            expect(body).toBeTruthy();
            expect(body).toContain("Avengers");
            done();
        });
    });
});
describe("Check status code for APIs", () => {
    describe("For GET API /", () => {
        it("returns status code 200", (done) => {
            request.get(base_url + "/dvds", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    });
});
// describe("Returns 404 status code", () => {
// it("returns 404", (done) => {
//     request.get(base_url +"/dvds", (error, response, body) => {

//         expect(response.statusCode).toBe(404);
//         done();
//         });
//     });
// });
describe("checks currency and sales tax for Ireland", () => {
    it("returns 200 and contains converted price", (done) => {
        request.get(base_url + "/dvds?location=IE", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            expect(body).toContain("23.04");
            done();
        });
    });
});
describe("checks currency and sales tax for US", () => {
    it("returns 200 and contains converted price", (done) => {
        request.get(base_url + "/dvds?location=US-NC", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            expect(body).toContain("20.03");
            done();
        });
    });
});
describe("checks currency and sales tax for India", () => {
    it("returns 200 and contains converted price", (done) => {
        request.get(base_url + "/dvds?location=IN", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            expect(body).toContain("1797.96");
            done();
        });
    });
});
describe("checks /team url", () => {
    it("returns 200 and contains team member name", (done) => {
        request.get(base_url + "/team", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            expect(body).toContain("Aimaan");
            done();
        });
    });
});
describe("checks post of DVD item", () => {
    it("returns 201 and contains added item", (done) => {
        data = {
            "title": "Aqua Man",
            "mpaa_rating": "PG",
            "studio": "Walt Disney Video",
            "time": "124",
            "price": "2431.50"
        };
        let body = JSON.parse(data);
        request.post(base_url + "/dvds", (error, response, body) => {
            expect(response.statusCode).toBe(201);
            // console.log(response);
            // expect(response).toBeTruthy();

            done();
        });
    });
});