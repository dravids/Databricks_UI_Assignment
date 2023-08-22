import React, { useEffect } from 'react'
import LayoutSideTopBottom from '../../Layout/LayoutSideTopBottom/LayoutSideTopBottom';
import { fetchComparisonresults, filteredResultsonSearch } from "../../utils/utils.jsx";

function Home() {
    useEffect(()=>{
        console.log(1)
        console.log(fetchComparisonresults("A","B"))
    },[])
    return (
        <LayoutSideTopBottom />
    )
}

export default Home