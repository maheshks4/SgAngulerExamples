describe("Testing async", function() {

    var value = 0; 

    beforeEach(function(done) {
        setTimeout(function() {
            value = 1;
            done();
        }, 10);
        
     });


    it("async execution #1", function(done){
        value++ ;
        expect(value).toBeGreaterThan(0);
        console.log("val: " + value);
        done();
    });

    it("long async execution #2", function(done){

        setTimeout(function() {  // simulating the server delay.
            value = 5;
            expect(value).toBeGreaterThan(0);
            console.log("value: " + value);
            done();
            
        }, 3000);
       
        
    });

}) ;  // eo describe.