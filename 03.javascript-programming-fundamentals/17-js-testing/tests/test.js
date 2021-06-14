describe("compare() function", function() {

    it("should be able to compare two numbers, when second number is greater", function(){

        expect(compare(5, 8)).toEqual(-1);
    });
});