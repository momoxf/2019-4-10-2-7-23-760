
module.exports = function main(inputs) {
    if (inputs.distance <= 2) {
        return Math.round(6+inputs.parkTime*0.25)
} else if(inputs.distance <=8) { 
    return Math.round(6+0.8*(inputs.distance-2)+inputs.parkTime*0.25)
}else{
     return Math.round(6+0.8*6+0.8*1.5*(inputs.distance-8)+inputs.parkTime*0.25)
}
};
