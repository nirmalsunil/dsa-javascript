/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit=0;
    let buyPrice=Infinity;
    
    for(let price of prices){
        if(price < buyPrice){
            buyPrice=price;
        }else if(price - buyPrice > maxProfit){
            maxProfit=price-buyPrice;
        }
        
    }
    return maxProfit;
    
};
