

const isAnagram= function(s,t){

    if (s.length != t.length) return false;

    obj1={};
    obj2={};

    for (i=0;i<s.length;i++){
        obj1[i]= (obj1[i] || 0) + 1;
        obj2[i]=(obj2[i] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] != obj2[key]) return false;

    }

    return true;
}

console.log(isAnagram("anagram","nagaram"));
