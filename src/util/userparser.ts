interface IUser {
  firstName: string;
  lastName: string;
  clientId: string;
}

export default class UserParser {
  public static ParseV1 = (data: string): IUser => {
    let found0Flag = false;
    const found0EndFlag = false;
    let temp = [];
    const finalArr = [];
    for (let c = 0; c < data.length; c++) {
      if (data[c] === "0") {
        found0Flag = true;
      }
      temp.push(data[c]);
      if (
        c === data.length - 1 ||
        (found0Flag === true &&
          (data[c + 1] !== "0" || typeof data[c + 1] === "undefined"))
      ) {
        if (temp.length) {
          finalArr.push(temp.join(""));
        }
        temp = [];
        found0Flag = false;
      }
    }
    return {
      firstName: finalArr[0],
      lastName: finalArr[1],
      clientId: finalArr[2].slice(0, 3) + "-" + finalArr[2].slice(3),
    };
  };

  public static ParseV2 = (data: string): IUser => {
    let found0Flag = false;
    let temp = [];
    const finalArr = [];
    for (let c = 0; c < data.length; c++) {
      if (!found0Flag) {
        if (data[c] !== "0") {
          temp.push(data[c]);
        } else {
          found0Flag = true;
        }
      }
      if (found0Flag || typeof data[c + 1] === "undefined") {
        if (temp.length) {
          finalArr.push(temp.join(""));
        }
        temp = [];
        found0Flag = false;
      }
    }
    return {
      firstName: finalArr[0],
      lastName: finalArr[1],
      clientId: finalArr[2],
    };
  };
}
