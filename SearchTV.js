const Submit = document.querySelector("#Form")
Submit.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchterm = Form.elements[0].value;
    console.log(searchterm)
    try {
        const config = { headers: { Accept: '' } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`, config)
        console.log(res)
        const DATA = res.data
        let i = -1
        DATA.forEach(element => {
            i += 1
            img = document.createElement("Img")
            src = res.data[i].show.image
            img.width = 300
            img.height = 400

            console.log(src)
            if (src == null) {
                img.src = "https://www.shutterstock.com/image-vector/no-image-available-sign-internet-web-261719003"
            }
            else {
                img.src = res.data[i].show.image.original
            }

            console.log(`Done ${i}`)
            document.body.append(img)
        });

    }
    catch (e) {
        console.log("ERROR!!", e)

    }



})
