function pattern(row){
    let ans = [];
    for(let i=row;i>0;i--){
        //
        let cur = ""
        for(let j=1;j<=i;j++){
            cur += j
        }
        ans.push(cur);
    }
    return ans;
}

pattern(5);

// 12345
// 1234
// 123
// 12
// 1

// *
// **
// ***
// ****
// *****

//  *
// ***
//*****



function pattern(row){
    let ans = [];
    for(let i=0;i<row;i++){
    // i=1; i=2;
    /// 2, 1,
    let temp = ""
    //row = 3
        for(let j=row;j>i;j--){
            temp += " "
        }
        for(let j=0;j<=2*i;j++){
            temp += "*"
        }
        for(let j=row;j>i;j--){
           temp += " "
        }

        console.log(temp +'\n');
       
        // ans.push(temp)

    }

    //row = 4
    for(let i=row;i>=0;i--){
        let temp = "";
        for(let j=0;j<row-i;j++){
            temp += " "
        }
        for(let j=0;j<=2*i;j++){
            temp += "*"
        }
        for(let j=0;j<row-i;j++){
            temp += " "
        }
        console.log(temp +'\n');
    }
    // return ans;
}

//  *****
//   ***
//    *