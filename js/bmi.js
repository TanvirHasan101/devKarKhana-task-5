// BMI CALCULATOR 

function BMI() {

    document.getElementById("welcome-div").style.display = 'none'
    document.getElementById("BMI").style.display = 'block'
    document.getElementById("BMR").style.display = 'none'
    document.getElementById("CALORIE").style.display = 'none'
    document.getElementById("WEIGHT").style.display = 'none'



    document.getElementById('BMI').innerHTML = `
    
            <section class="block h-full p-10">
            <h1 class="text-4xl font-bold mb-10 text-center">Calculate BMI</h1>
            <div class="flex flex-col md:flex-row w-full">
                <div class=" form-control w-full md:w-1/2 flex flex-col p-8 bg-lime-200 rounded-2xl mx-2">
                    
                    <div class=" w-full flex flex-row justify-center items-center">
                        <label class="input-group my-2 w-full">
                            <span class=" bg-lime-500 w-26  font-semibold">Height</span>
                            <input min="0" id="bmi_height_feet" type="number" placeholder="feet"
                                class="input input-bordered w-full" />
                            <input min="0" max="11" id="bmi_height_inch" type="number" placeholder="inch"
                                class="input input-bordered w-full" />
                        </label>
                    </div>

                    <div class=" w-full flex flex-row justify-center items-center">
                        <label class="input-group my-2 w-full">
                            <span class="bg-lime-500 w-24 font-semibold">Weight</span>
                            <input id="bmi_weight" type="number" placeholder="kg" class="input input-bordered w-full" />
                        </label>
                    </div>
                    <div id="bmi_warning" class="alert alert-error shadow-lg">
                    <div>
                           <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     <span id="bmi_input_warning"></span>
                     </div>
                  </div>
                    <button onclick="calculateBMI()"
                        class="btn btn-primary mt-4 px-10 w-full hover:text-white hover:bg-lime-800">Calculate
                    </button>
                    <button onclick="clearBmiData()"
                    class="btn bg-red-500 text-white border-current text-center mt-10 mx-auto px-10 w-1/5 hover:text-white hover:bg-red-800">Clear
                </button>
                </div>

                <div id="bmi_result"
                    class="w-full md:w-1/2 p-8 bg-lime-200 rounded-2xl mx-2 mt-6 md:mt-0 flex flex-col justify-center items-center">
                    <h1 class="text-2xl font-bold ">Your BMI: <span id="bmi"
                            class="text-neutral">_</span> kg/m<sup>2</sup> </h1>
                    <span id="category_bmi"></span>
                </div>
            </div>
        </section>
   
    
    `

    document.getElementById("bmi_warning").style.display = 'none'
}



function calculateBMI() {
    let getHeightFeet = document.getElementById("bmi_height_feet").value;
    let getHeightInch = document.getElementById("bmi_height_inch").value;
    let getWeight = document.getElementById("bmi_weight").value;
    if (getHeightFeet, getHeightInch, getWeight) {
        if (getHeightFeet < 0 || getHeightInch < 0 || getWeight < 0) {
            document.getElementById("bmi_warning").style.display = 'block'
            document.getElementById("bmi_input_warning").innerText = "Please Put Valid Information";

        }
        else {
            document.getElementById("bmi_warning").style.display = 'none'
            let totalHeight = (parseFloat((getHeightFeet * 12)) + parseFloat(getHeightInch)) * 0.0254;
            let bmi = parseFloat(parseFloat(getWeight) / (totalHeight * totalHeight));
            document.getElementById('bmi').innerText = bmi.toFixed(3);

            let categoryBmiText;
            if (bmi < 16) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                SEVER THINNESS
                </span>
                
                `

            }
            else if (16 <= bmi && bmi < 17) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-500 text-center"> 
                Moderate Thinness
                </span>
                
                `

            }

            else if (17 <= bmi && bmi < 18.5) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-600 text-center"> 
                Mild Thinness
                </span>
                `

            }
            else if (18.5 <= bmi && bmi < 25) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-primary text-center"> 
            NORMAL
                </span>
                
                `
            }
            else if (25 <= bmi && bmi < 30) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-yellow-500 text-center"> 
               OVER WEIGHT
                </span>
                
                `
            }
            else if (30 <= bmi && bmi < 35) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class I
                </span>
                
                `
            }
            else if (35 <= bmi && bmi < 40) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class II
                </span>
                
                `
            }
            else if (40 <= bmi) {
                categoryBmiText = `
                <span id="category_bmi" class="text-xl mt-5 font-bold text-red-500 text-center"> 
                OBESE Class III
                </span>
                
                `
            }

            document.getElementById("category_bmi").innerHTML = categoryBmiText;

        }
    }
    else {
        document.getElementById("bmi_warning").style.display = 'block'
        document.getElementById("bmi_input_warning").innerText = "Please Put Valid Information"
        alert('Some Fields are empty');

    }
}


function clearBmiData() {

    document.getElementById("bmi_height_feet").value = ""
    document.getElementById("bmi_height_inch").value = ""
    document.getElementById("bmi_weight").value = ""

    document.getElementById("category_bmi").innerHTML = ""
    document.getElementById('bmi').innerText = "_"

    document.getElementById("bmi_warning").style.display = 'none'
}

