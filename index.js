const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
}
function NationalParkHotels(data) {
    this.name = data.name
    this.rooms = data.rooms
    this.stars = data.stars
    this.costPerNightAdult = data.costPerNightAdult
}
const hotelone = new NationalParkHotels(hotel1)
const hotelTwo = new NationalParkHotels(hotel2)
 console.log(hotelone)
 console.log(hotelTwo)
/*
Challenge:
1. Create a constructor function called NationalParkHotels.
2. Have it take in "data" as a parameter
3. Assign the data to "this"
4. Log out the result of creating an instance of
   NationalParkHotels for each hotel.
*/
