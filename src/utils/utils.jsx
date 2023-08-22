import mainsidenavData from "../assets/data/sidenav.json";
import subsidenavData from "../assets/data/sidenav2.json";
import productCompareData from "../assets/data/compareX.json";
import momentTZ from "moment-timezone"; 
import moment from "moment";

// client side timezone
export const defaultTimeZone = () => momentTZ.tz.guess();

// Get current year
export const getCurrentYear = () => moment().year();

// Get current month
export const getCurrentMonth = () => moment().month();

//combine product selection to compare
export const getProductCompare =(productX,productY) =>{
    return "Compare"+productX+productY
}

//fetch comparison result based on product selection
export const fetchComparisonresults=(productX,productY)=>{
    console.log("Fetch Results Start")
    let compareValue=getProductCompare(productX,productY);
    let current_month = getCurrentMonth()
    current_month = moment().month(current_month).format("MMMM");
    // console.log(current_month)
    let current_month_results = productCompareData["monthly_comparison"][current_month]? productCompareData["monthly_comparison"][current_month][compareValue]:[];
    // console.log(current_month_results)
    let overall_results =  Object.values(productCompareData.monthly_comparison)
      .map(monthData => monthData[compareValue])
      .flat();
    let data={"current_month_comparison":current_month_results,"overall_comparison":overall_results}
    // console.log(data)
    filteredResultsonSearch(data,"Bug")
    return data
}

//filter results based on keyword - client search
export const filteredResultsonSearch = (data,searchKeyword) => {
    let result_data={}
    console.log(Object.keys(data))
    console.log(data['current_month_comparison'],typeof(data["current_month_comparison"]))
    let current_month_results = data["current_month_comparison"].toLowerCase().includes(searchKeyword.toLowerCase())
    let overall_results = data["overall_comparison"].toLowerCase().includes(searchKeyword.toLowerCase())
    // for(let i=0;i<Object.keys.length;i++){
    //     let key_value=Object.keys
    //     console.log(key_value)
    //     let filtered_data= data[Object.keys[i]].filter((data_obj)=>{
    //         console.log(data_obj)
    //         data_obj.toLowerCase().includes(searchKeyword.toLowerCase())
    //     })
    //     result_data[key_value].push(filtered_data)
    // }
    result_data={"current_month_comparison":current_month_results,"overall_comparison":overall_results}
    console.log("Search",result_data)
}