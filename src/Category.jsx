export function Category({final, setClickCat}){
    //console.log(final)
    let cats = final.map((v, i)=>{
        return(
            <li onClick={()=>setClickCat(v)} key={i}>{v}</li>
        )
    })
    return(
        <ul className='category' style={{marginBottom:'200px'}}>
            {cats}
        </ul>
    )
}