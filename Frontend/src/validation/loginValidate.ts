export const validateEmail = (email:string)=>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(!emailRegex.test(email)){
           return "Enter a valid Email"
    }


}