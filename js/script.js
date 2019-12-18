let searchBar = document.querySelector(".searchBar")
let title = document.querySelector(".titleField")
let string = "FIND YOUR VICTOM";
let titleChars = string;
// console.log(titleChars);
for (const key in titleChars) {
    if (titleChars.hasOwnProperty(key)) {
        const element = titleChars[key];
        // console.log(element);
        let p = document.createElement("p")
        p.style.textAlign = "center"
        p.innerHTML = element;
        p.style.color = '#' + parseInt(Math.random() * 0xffffff).toString(16)
        title.appendChild(p)
    }
}

let p = document.querySelectorAll("p");
for (const key in p) {
    if (p.hasOwnProperty(key)) {
        const element = p[key];

    }
}
console.log(p[0]);
p[0].style.left = "13%"
if (p[0].style.left == "13%") {
    window.onload = function() {
        setInterval(() => {

            p[0].style.left = "0%";
            p[0].style.transition = "all 2s ease-out"
        }, 2000)
    }

} else {

}



let input = document.querySelector("#text")
let inputNumber = document.querySelector("#number")
    // console.log(inputNumber.value);
let outerDiv = document.querySelector(".imagesWhole");

// console.log(outerDiv.children);

// if (outerDiv.children) {
//     alert("empty")
// } else {

// }
var h1 = document.createElement("h1");
h1.innerHTML = "NOTHING IS HERE! PLEASE CONNECT TO INTERNET AND START SEARCHING";
outerDiv.appendChild(h1)



let button = document.querySelector("button").addEventListener("click", fetching => {



    fetch("https://api.pexels.com/v1/search?query=" + input.value + "+query&per_page=" + inputNumber.value + "&page=1", {
            headers: {
                "Authorization": "563492ad6f917000010000018a09506092b747d0aee5e5d61f714778"
            }
        })
        .then(resp => resp.json())
        .then(data => {

            console.log(data.total_results);
            if (data.total_results === 0) {
                console.log(true);
            } else {
                console.log(false);
            }

            while (outerDiv.firstChild) {
                outerDiv.firstChild.remove();

            }

            // if (Object.keys(data).length != 0) {
            //     console.log(Object.keys(data));
            // } else {
            //     console.log("datafound");
            // }




            if (input.value.length == 0 && inputNumber.value.length == 0) {
                h1.innerHTML = "FILL THE INPUT PLEASE!";
                outerDiv.appendChild(h1)
                console.log(data);

            } else if (data.total_results === 0) {
                h1.innerHTML = "NOTHING FOUND PLEASE SEARCH ANOTHER THING";
                outerDiv.appendChild(h1)
            } else {
                console.log(data);
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        // console.log(data.photos[0].src["landscape"]);
                        for (const keys in element) {
                            if (element.hasOwnProperty(keys)) {
                                if (element.total_results == 0) {
                                    h1.innerHTML = "NOTHING FETCHED";
                                    outerDiv.appendChild(h1)
                                    console.log("object");
                                    console.log(data);
                                } else {
                                    const elements = element[keys];
                                    console.log(elements.src["landscape"]);

                                    let innerDiv = document.createElement("div");
                                    innerDiv.className = "col-fl-md-4";
                                    let img = document.createElement("img");
                                    img.setAttribute("src", elements.src["landscape"])
                                    img.style.width = "100%"
                                    innerDiv.appendChild(img)
                                    outerDiv.appendChild(innerDiv)
                                    console.log(outerDiv.innerHTML);

                                }


                            }
                        }
                    }
                }
            }
            // } else {
            //     h1.innerHTML = "NOTHING IS HERE PLEASE SEARCH FIRST";
            //     outerDiv.appendChild(h1)
            // }
        })

});