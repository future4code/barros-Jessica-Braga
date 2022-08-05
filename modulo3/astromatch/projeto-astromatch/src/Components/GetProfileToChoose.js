import React, {useState} from "react";
import axios from "axios";


function ProfileChoose () {
   
const [Profile, setProfile] = useState()
    
const GetProfileToChoose=()=>{
axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person",
{ headers: {aluno:"jessica"}
})
.then((response)=>{
console.log(response.data.profile)

})
.catch((error)=>{
console.log(error.response.data)
})
}
return (
    <>
    <GetProfileToChoose/>
    </> 
)

}
 
export default ProfileChoose;








