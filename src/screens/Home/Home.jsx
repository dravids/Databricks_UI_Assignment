//Library and Component Imports
import React, { useEffect, useState } from 'react';
import LayoutSideTopBottom from '../../Layout/LayoutSideTopBottom/LayoutSideTopBottom';
import { fetchComparisonresults, filteredResultsonSearch, getCurrentMonth, getproductList } from "../../utils/utils.jsx";
import Select from 'react-select';

//Import PNG's and Icons
import { SearchIcon, ClearIcon } from '../../utils/icons';
import no_data_found from "../../assets/images/no_data_found.png"

//Import Styling
import './home.scss';


//Custom Styles for React-Select Dropdown
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: state.isSelected ? 'bold' : 'normal',

    padding: '10px',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      fontSize: '12px',
      padding: '8px',
    },
    '@media (max-width: 768px)': {
      fontSize: '9px',
      padding: '8px',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    padding: '2px 15px',
    '@media (max-width: 1024px)': {
      fontSize: '10px',
      padding: '2px 10px'
    },
    '@media (max-width: 768px)': {
      fontSize: '9px',
      padding: '2px 0px'
    },
  }),
  control: (provided) => ({
    ...provided,
    textAlign: 'center',
    fontSize: '12px',
    borderRadius: '12px',
    borderColor: '#ccc',
    boxShadow: 'none',
    width: '100%',
    padding: '0px 5px',    
    // height:'15px',
    maxHeight:'24px',
    '&:hover': {
      borderColor: '#ccc',
    },

    '@media (max-width: 1024px)': {
      fontSize: '10px',      
      padding: '0px 14px'
    },
    '@media (max-width: 768px)': {
      fontSize: '10px',
      padding: '0px 14px'
    },
  }),
};

function Home() {

  //Variable Declaration
  const [product_selection_1, setProductSelection1] = useState('');
  const [product_selection_2, setProductSelection2] = useState('');
  const [comparison_data, setComparisonData] = useState({ current_month_comparison: [], overall_comparison: [] }); // Initialize comparison_data with an empty array
  const [filteredData, setFilteredData] = useState({ current_month_comparison: [], overall_comparison: [] })
  const [productList, setProductList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [current_month, setCurrentmonth] = useState('')
  


  // Function to fetch comparison results and update comparison_data state
  const fetchAndSetComparisonData = async () => {
    if (product_selection_1 !== '' && product_selection_2 !== '') {
      try {
        const data = await fetchComparisonresults(product_selection_1, product_selection_2);
        setComparisonData(data);
        setFilteredData(data)
      } catch (error) {
        console.error("Error fetching comparison data:", error);
      }
    }
  };

  useEffect(() => {
    const data = getproductList()
    setProductList(data)
    setCurrentmonth(getCurrentMonth())
  }, [])

  // Use fetchAndSetComparisonData whenever product_selection_1 or product_selection_2 changes

  useEffect(() => {
    fetchAndSetComparisonData();

    // eslint-disable-next-line
  }, [product_selection_1, product_selection_2]);

  const handleProductChange = (value, product_attribute) => {
    if (product_attribute === 'dropdown_1') {

      setProductSelection2('');
      setProductSelection1(value);
      setFilteredData({ current_month_comparison: [], overall_comparison: [] })
    } else {
      setProductSelection2(value);
    }
  };

  const handleSearch = () => {
    const data = filteredResultsonSearch(comparison_data, searchText)
    setFilteredData(data)
  }

  return (
    <LayoutSideTopBottom>
      <main className="main">
        <div className="main-title">
          <h2>What would you like to compare today?</h2>
        </div>
        <div className='product-selection'>
          <div className='dropdowns'>
            <Select
              placeholder="Select a Product"
              options={productList}
              value={productList.filter(
                (obj) => obj.value === product_selection_1
              )}
              onChange={value => handleProductChange(value.value, 'dropdown_1')}
              styles={customStyles}
            />

            <Select
              placeholder="Select a Product"
              options={productList.filter(data => data.value !== product_selection_1)}
              value={productList.filter(
                (obj) => obj.value === product_selection_2
              )}
              onChange={value => handleProductChange(value.value, 'dropdown_2')}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="search-bar">
          <div className="input-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="What can we help you find?"
            />
            {searchText !== '' && (
              <ClearIcon className="search-icon" style={{ cursor: 'pointer' }} onClick={() => setSearchText('')}
              />
            )}
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {(filteredData.current_month_comparison.length > 0 || filteredData.overall_comparison.length > 0) ? (
          <div className='main-results-container'>

            <div className='main-results'>
              <div className='monthly-results'>
                <h2 className='title'>{current_month} comparison</h2>
                {filteredData.current_month_comparison.length > 0 ? (
                  filteredData.current_month_comparison.map((data, index) => (
                    <div key={index}>
                      <div className='display-results' style={{
                        position: "relative",
                        top: data
                      }}>
                        <span className='new-icon'>
                          <span className='new-text'>NEW</span>
                        </span>
                        <p className='result-text'>
                          <span className='animation-text'>{data}</span></p>
                      </div>
                      {index !== filteredData.current_month_comparison.length - 1 && (
                        <div className='hr-container'>
                          <hr />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className='not-found-container'>
                    <img src={no_data_found} style={{ width: '30%' }} alt='not-found' />
                    No Data found for the {searchText !== '' ? 'keyword' : 'product selection'} for the current month
                  </div>
                )}
              </div>
            </div>

            <div className='main-results'>
              <div className='monthly-results'>
                <h2 className='title'>Overall comparison</h2>
                {filteredData.overall_comparison.length > 0 ? (
                  filteredData.overall_comparison.map((data, index) => (
                    <div key={index}>
                      <div className='display-results' style={{
                        transition: data ? "top 3s ease" : "none",
                        position: "relative",
                        top: data
                      }}>
                        <span className='new-icon'>
                          <span className='new-text'>NEW</span>
                        </span>
                        <p className='result-text'>{data}</p>
                      </div>
                      {index !== filteredData.overall_comparison.length - 1 && (
                        <div className='hr-container'>
                          <hr />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className='not-found-container'>
                    <img src={no_data_found} style={{ width: '30%' }} alt='not-found' />
                    No Data found for the {searchText !== '' ? 'keyword' : 'product selection'} for all the months
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='not-found-container'>
            <img src={no_data_found} style={{ width: '30%', marginTop: '15px' }} alt='not-found'></img>
            <p>No Data found - Please make a {searchText !== '' ? 'change in keyword' : 'product selection'}  to proceed</p>
          </div>
        )
        }
      </main>
    </LayoutSideTopBottom >
  );
}

export default Home;
