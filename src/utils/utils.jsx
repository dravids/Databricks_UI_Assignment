import productList from "../assets/data/productList.json"
import productCompareData from "../assets/data/compareX.json";
import momentTZ from "moment-timezone";
import moment from "moment";

// client side timezone
export const defaultTimeZone = () => momentTZ.tz.guess();

// Get current year
export const getCurrentYear = () => moment().year();

// Get current month
export const getCurrentMonth = () => {
    const current_month = moment().month(); // Declare and initialize current_month
    return moment().month(current_month).format("MMMM");
};

export const getproductList = () => {
    return productList['products']
}
//combine product selection to compare
export const getProductCompare = (productX, productY) => {
    return "Compare" + productX + productY
}

// Helper function to reverse the compareValue (e.g., AB becomes BA)
const reverseCompareValue = (compareValue) => {
    return compareValue.split('').reverse().join('');
}

export const fetchProductResults = (compareValue, current_month) => {
    let current_month_results = productCompareData["monthly_comparison"][current_month] ? productCompareData["monthly_comparison"][current_month][compareValue] : [];
    
    // If there are no results for the selected compareValue, try the reversed value
    if (current_month_results.length === 0) {
        let reversedValue = reverseCompareValue(compareValue);
        current_month_results = productCompareData["monthly_comparison"][current_month] ? productCompareData["monthly_comparison"][current_month][reversedValue] : [];
    }

    let overall_results = Object.values(productCompareData.monthly_comparison)
        .map(monthData => monthData[compareValue])
        .flat();
    
    // If there are no overall results for the selected compareValue, try the reversed value
    if (!hasActualResults(overall_results)) {
        let reversedValue = reverseCompareValue(compareValue);
        overall_results = Object.values(productCompareData.monthly_comparison)
            .map(monthData => monthData[reversedValue])
            .flat();
    }

    return [current_month_results, overall_results]
}

// Helper function to check if the data has actual results
const hasActualResults = (results) => {
    return results.some(result => result !== null && result !== undefined);
}

export const fetchComparisonresults = (productX, productY) => {
    // Assuming getProductCompare, getCurrentMonth, and fetchProductResults are synchronous functions
    let compareValue = getProductCompare(productX, productY);
    let current_month = getCurrentMonth();
    let current_month_results = [];
    let overall_results = [];

    // Fetch data for current_month_results and overall_results
    try {
        [current_month_results, overall_results] = fetchProductResults(compareValue, current_month);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    // If the data is not available, try fetching with a different compareValue
    if (!hasActualResults(current_month_results) && !hasActualResults(overall_results)) {
        console.log("Results are undefined/null. Refetching...");

        compareValue = getProductCompare(productY, productX);

        try {
            [current_month_results, overall_results] = fetchProductResults(compareValue, current_month);
            console.log("Fetched results after refetch:", current_month_results, overall_results);
        } catch (error) {
            console.error("Error fetching data after refetch:", error);
        }
    }

    let data = {
        current_month_comparison: current_month_results,
        overall_comparison: overall_results
    };
    return data;
}

//filter results based on keyword - client search
export const filteredResultsonSearch = (data, searchKeyword) => {
    let result_data = {};

    let current_month_results = data["current_month_comparison"].filter((data_obj) =>
        data_obj.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    let overall_results = data["overall_comparison"].filter((data_obj) =>
        data_obj.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    result_data = { "current_month_comparison": current_month_results, "overall_comparison": overall_results };
    return result_data;
};
