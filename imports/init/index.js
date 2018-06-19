



export const initIndex =()=>{
    let index =localStorage.getItem("initIndex")
    if(index)
        return parseInt(index)
    else
        return 1

}