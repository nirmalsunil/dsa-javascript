/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let length=s.length;
    let max=0;
    let start=0;
    let set= new Set();
    
    if(length === 0) return 0;
    if (length === 1 ) return 1;
    for(let end=0; end < length ; end++){
        
        while(set.has(s[end])){
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        max=Math.max(max, end-start+1);
    }
    
    return max;
    
};
