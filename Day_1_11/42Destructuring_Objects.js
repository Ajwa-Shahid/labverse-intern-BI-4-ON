// object destructuring

const magic_Shop={
    name : "BTS",
    location : "Seoul",
    famousSong : "Butter",
}

const bandname = magic_Shop.name;  
const location=magic_Shop.location;

console.log(bandname, location);

//Shortcut to do above task

const {name, Location, ...restProperties}=magic_Shop;    //...restProperties is an object, will store all the remaining properties of magic_Shop object in an object (restProperties)
console.log(bandname, name, location, restProperties);         

//Destructuring with different variable names

const {name: band_Name, location: band_Location} = magic_Shop;
console.log(band_Name, band_Location);