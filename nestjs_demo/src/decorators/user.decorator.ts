import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User = createParamDecorator((data, ctx: ExecutionContext) => {

    // kết nối CSDL
    let lstData = [{
        id: 1, name: "abc", email: "abc@gmail.com"
    },
    {
        id: 2, name: "abc 2", email: "abc2@gmail.com"
    }]

    return lstData.find(n => n.id == data)
})