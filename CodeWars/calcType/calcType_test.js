describe("Sample tests", function(){
    it("addition", function(){
      Test.assertEquals(calcType(1,2,3),'addition'); 
    });
    it("multiplication", function(){
      Test.assertEquals(calcType(10,4,40),'multiplication'); 
    });
    it("subtraction", function(){
      Test.assertEquals(calcType(10,5,5),'subtraction'); 
    });
    it("division", function(){
      Test.assertEquals(calcType(9,5,1.8),'division'); 
    });
  });