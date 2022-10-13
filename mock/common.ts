// import { Request, Response } from 'express';
import { UmiApiResponse,UmiApiRequest } from "umi"
import { defineMock } from "umi"
// console.log("mock被加载......")
export default defineMock({
    'GET /json': (req:UmiApiRequest,res:UmiApiResponse) => {
        res.status(200).json({
            status: "success-mock",
            country: "中国-mock",
            regionName: "上海-mock",
            city: "上海-mock",
            query: "127.0.0.1-mock"
        })

    }
})