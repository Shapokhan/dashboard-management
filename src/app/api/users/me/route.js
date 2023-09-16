import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try {
        const userID = await getDataFromToken(request);
        const user = await User.findOne({_id: userID})
                    .select("-password");
        return NextResponse.json({
            message: "User Found",
            data: user
        });
    } catch (error) {
        return NextResponse.json({error: error.message},
        {status: 400});
    }
}