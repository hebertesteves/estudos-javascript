describe("Basic tests",() =>{
    Test.assertEquals(nextHappyYear(1001),1023);
    Test.assertEquals(nextHappyYear(1123),1203);
    Test.assertEquals(nextHappyYear(2001),2013);
    Test.assertEquals(nextHappyYear(2334),2340);
    Test.assertEquals(nextHappyYear(3331),3401);
    Test.assertEquals(nextHappyYear(1987),2013);
    Test.assertEquals(nextHappyYear(5555),5601);
    Test.assertEquals(nextHappyYear(7712),7801);
    Test.assertEquals(nextHappyYear(8088),8091);
    Test.assertEquals(nextHappyYear(8999),9012);
  });