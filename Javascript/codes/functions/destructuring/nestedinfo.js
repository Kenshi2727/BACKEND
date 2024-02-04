const person={
    name:'John',
    address:{
        city:'New York',
        country:'USA'
    }
};

// const getNestedInfo = ({name,address}) => {
//     const {city,country} = address;
//     return `${name} lives in ${city}, ${country}`;
// };

const getNestedInfo = ({name,address:{city,country}}) => {
    return `${name} lives in ${city}, ${country}`;
};
console.log(getNestedInfo(person)); // John lives in New York, USA