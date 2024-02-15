function checkPower(num) {
    var res = 0;
    var ans = "yes";
    for (let i = 0; i < num; i++) {
      if (num != 1) {
        res = num / 2;
        if (res != 1) {
          num = res;
          if (res % 2 != 0) {
            ans = "no";
            break;
          }
        }
      }
    }
    console.log(ans);
  }
  checkPower(100);