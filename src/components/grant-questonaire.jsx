"use client"

import Link from "next/link"
import { useState } from "react"

export default function GrantQuestionnaire() {
    const [gender, setGender] = useState('')
    const [citizen, setCitizen] = useState('')
    const [income, setIncome] = useState('')
    const [age, setAge] = useState('')

    return (
        <div className="bgcolor1 max-w-3xl mx-auto p-6">
            <div className="text-center mb-6">
                <h3 className="text-1xl text-sky-400 font-normal">
                    Answer a few questions below to get matched with programs that interest you. Grant Programs currently provide
                    up to $7,395* per year to those who qualify.
                </h3>
            </div>

            <div className="border-t border-blue-900 my-6"></div>

            <div className="mb-8">
                <h2 className="text-lg text-sky-600 font-medium flex items-center mb-4">
                    <span className="mr-2">»</span> 1. What's your gender?
                </h2>
                <div className="flex gap-12 ml-8">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={() => setGender("male")}
                            className="mr-2 h-4 w-4"
                        />
                        Male
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={() => setGender("female")}
                            className="mr-2 h-4 w-4"
                        />
                        Female
                    </label>
                </div>
            </div>

            <div className="border-t border-blue-900 my-6"></div>

            <div className="mb-8">
                <h2 className="text-lg text-sky-600 font-medium flex items-center mb-4">
                    <span className="mr-2">»</span> 2. Are you a citizen of the United States?
                </h2>
                <div className="flex gap-12 ml-8">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="citizen"
                            value="yes"
                            checked={citizen === "yes"}
                            onChange={() => setCitizen("yes")}
                            className="mr-2 h-4 w-4"
                        />
                        Yes
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="citizen"
                            value="no"
                            checked={citizen === "no"}
                            onChange={() => setCitizen("no")}
                            className="mr-2 h-4 w-4"
                        />
                        No
                    </label>
                </div>
            </div>

            <div className="border-t border-blue-900 my-6"></div>

            <div className="mb-8">
                <h2 className="text-lg text-sky-600 font-medium flex items-center mb-4">
                    <span className="mr-2">»</span> 3. Do you make less than $80,000 a year?
                </h2>
                <div className="flex gap-12 ml-8">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="income"
                            value="yes"
                            checked={income === "yes"}
                            onChange={() => setIncome("yes")}
                            className="mr-2 h-4 w-4"
                        />
                        Yes
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="income"
                            value="no"
                            checked={income === "no"}
                            onChange={() => setIncome("no")}
                            className="mr-2 h-4 w-4"
                        />
                        No
                    </label>
                </div>
            </div>

            <div className="border-t border-blue-900 my-6"></div>

            <div className="mb-8">
                <h2 className="text-lg text-sky-600 font-medium flex items-center mb-4">
                    <span className="mr-2">»</span> 4. Were you born on or before 1977?
                </h2>
                <div className="flex gap-12 ml-8">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="age"
                            value="yes"
                            checked={age === "yes"}
                            onChange={() => setAge("yes")}
                            className="mr-2 h-4 w-4"
                        />
                        Yes
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="age"
                            value="no"
                            checked={age === "no"}
                            onChange={() => setAge("no")}
                            className="mr-2 h-4 w-4"
                        />
                        No
                    </label>
                </div>
            </div>

            <div className="border-t border-blue-900 my-6"></div>

<form action="" style="display:none;">
  <input type="text" id="fname" name="fname" value="John"><br>
  <input type="submit" value="Submit">
</form> 

            <div className="flex justify-center my-8">
             <input type="button"  className="nextcta bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-20 rounded-md text-2xl" value="Submit" onclick="window.location.href='https://znw01op-sd.myshopify.com/pages/profile-matching-successful';">

            </div>
                
<script>
$(document).ready(function(){
$(document).on("click",".nextcta",function(){
if ($('input[name=ans1]:checked').length > 0 &&
$('input[name=ans2]:checked').length > 0 &&
$('input[name=ans3]:checked').length > 0 &&
$('input[name=ans4]:checked').length > 0) 
{

$.when($(".web-ques-wrap").fadeOut(1000))
.done(function() {
$(".end").fadeIn("slow");

window.setTimeout(function(){

// Move to a new location or you can do something else
window.location.href = "https://znw01op-sd.myshopify.com/pages/profile-matching-successful";

}, 1000);
});


}else{
alert("Please answer all questions.");
}
});
});
</script>

            <div className="border-t border-blue-900 my-6"></div>

            <div className="text-center text-sm text-amber-800">
                You must be 18 or older and have a high school diploma or GED to qualify
            </div>

            <div className="border-t border-blue-900 my-6"></div>
        </div>
    )
}
