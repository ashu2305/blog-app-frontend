import React, {useEffect} from "react";

import axios from "axios";

function Blogs(){
    
    useEffect(() => {
        const dataFetch = async() => {
            try{
                const headers = {
                    "Access-Control-Allow-Origin": "*"
                }
                const res = await axios.get("https://mostlypandatuts.herokuapp.com/api/blogs", headers);
                console.log(res);

            }
            catch(error){
                console.log(error);
            }
            
        }
        dataFetch();


    }, [])

    return (
        <> 
            
        </>
    )

}
export default Blogs;