describe("hotelBooking", function(){
	it("cho arrival[1,3,5], departure[2,6,8], room 1", function(){
		expect(false).toEqual(hotelBookingPossible([1,3,5],[2,6,8],1))
	});
});
describe("hotelBooking", function(){
	it("cho arrival[2,3,5], departure[1,6,8], room 1", function(){
		expect(false).toEqual(hotelBookingPossible([1,3,5],[2,6,8],1))
	});
});
describe("hotelBooking", function(){
	it("cho arrival[3,5,7], departure[2,6,8], room 3", function(){
		expect(true).toEqual(hotelBookingPossible([1,3,5],[2,6,8],1))
	});
});