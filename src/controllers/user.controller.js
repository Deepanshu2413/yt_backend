import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => { 

   
    // get user details from frontend
    // validation - not empty 
    // check if user is already exists: by username or email,
    //check for image, chech avatar
    // upload then cloudinary, avatar
    //create user object - create entry in db
    // remove password and refersh token field from response 
    //check for user creation
    //return res

    // this is how real algo are written 

    const {
        fullName,
        email,
        username, 
        password
    } = req.body

    if([fullName,
        email,
        username, 
        password].some((field) => field?.trim() === ""))
        {
            throw new ApiError(400, "All field are required")
        }
    
        const existedUser = await User.findOne({
        $or: [{username} , { email}]
     })



    
      



     // login 

      const { fullName, email,  password } = req.User

      if(fullName || email ) {

      }  
     






});




export { 
    registerUser

 }; 
