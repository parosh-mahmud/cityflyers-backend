var Horseman = require('node-horseman');

let getURL = async (airline) => {
    airline = airline.replace(' ', '+');
    return new Promise((resolve, reject) => {
        var horseman = new Horseman();
        let url = `https://www.google.com/search?q=${airline}+airlines+official+logo`;
        horseman
            .userAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36')
            .open(url)
            .evaluate(function () {
                if (!!document.querySelector('g-img img')) {
                    return document.querySelector('g-img img').getAttribute('src')
                }
                else {
                    throw new Error('not able to get image');
                }
            })
            .then(function (data) {
                resolve(data);
                return horseman.close();
            })
            .catch(function (error) {
                horseman.close();
                reject(error);
            });
    })
}


let get_all_images = async (airline) => {
    try {
        let image = await getURL(airline);
        if (!!image) {
            return image
        }
        else {
            throw new Error(`Can't fetch the image from the URL`)
        }
    }
    catch (error) {
        throw error;
    }

}


module.exports = get_all_images;
