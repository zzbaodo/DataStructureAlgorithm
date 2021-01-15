var romanToInt = function(s) {
    const orginValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      }
      const values = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
      }
      const order = {
        I: 1,
        V: 2,
        X: 3,
        L: 4,
        C: 5,
        D: 6,
        M: 7,
      }
      const split = s.split('')
      let sum = 0
      for (let i = 0; i < split.length; i++) {
        if (order[split[i]] >= order[split[i + 1]] || i === split.length-1) {
          sum += orginValue[split[i]]      
        } else {
          const num = `${split[i]}${split[i + 1]}`
          sum += values[num]
          i++
        }
      }
        return sum
    };