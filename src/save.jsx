function save(savedQuote){
    let savedQuotes=JSON.parse(localStorage,getItem('alinti'))|| [];
    savedQuotes.push(savedQuote);
    localStorage.setItem('alinti',JSON.stringify(savedQuotes));
}

function goster(){
    let savedQuotes=JSON.parse(localStorage,getItem('alinti'))|| [];
    savedQuotes.forEach(alinti=>{
        console.log(alinti);
    });
}
export {save,goster};
