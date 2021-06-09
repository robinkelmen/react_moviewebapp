

import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_X8YqhiQmv",
    ClientId: "6rs4dui65ehd8ea057u6cjo8kh"
}

export default new CognitoUserPool(poolData);