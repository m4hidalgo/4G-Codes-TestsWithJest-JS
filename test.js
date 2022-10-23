// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("Five dollars should be 532,92 (rounded up) yens", function(){
    const yen = fromDollarToYen(5);

    const expected = 5/1.2*127.9;

    expect(yen).toBe(expected);
});

test("Five hundred yen should be 3,13 (rounded up) pounds", function(){
    const pound = fromYenToPound(500);

    const expected = 500/127.9*0.8;

    expect(pound).toBe(expected);
});

